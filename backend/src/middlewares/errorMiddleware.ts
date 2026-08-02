import { Prisma } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';

    if(err instanceof Prisma.PrismaClientKnownRequestError){
        if(err.code === 'P2002') {
            statusCode = 422;
            message = `Unique Data Constraint Failed: ${(err.meta?.target as string[])?.join(', ')} already exists.`;
        }
        if(err.code === 'P2003') {
            statusCode = 400;
            message = 'Failed to proccess data, because Relational ID(Foreign Key) not found.'
        }
    }

    console.log(`[ERROR] [${req.method}] ${req.path} -> ${message}`);

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message: statusCode === 500 ? 'Internal Server Error': message,
        ...(process.env.NODE_ENV != 'production' && { stack: err.stack }),
    });
};