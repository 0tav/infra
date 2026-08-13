
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model t_learnskill
 * 
 */
export type t_learnskill = $Result.DefaultSelection<Prisma.$t_learnskillPayload>
/**
 * Model t_category
 * 
 */
export type t_category = $Result.DefaultSelection<Prisma.$t_categoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more T_learnskills
 * const t_learnskills = await prisma.t_learnskill.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more T_learnskills
   * const t_learnskills = await prisma.t_learnskill.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.t_learnskill`: Exposes CRUD operations for the **t_learnskill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_learnskills
    * const t_learnskills = await prisma.t_learnskill.findMany()
    * ```
    */
  get t_learnskill(): Prisma.t_learnskillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_category`: Exposes CRUD operations for the **t_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_categories
    * const t_categories = await prisma.t_category.findMany()
    * ```
    */
  get t_category(): Prisma.t_categoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    t_learnskill: 't_learnskill',
    t_category: 't_category'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "t_learnskill" | "t_category"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      t_learnskill: {
        payload: Prisma.$t_learnskillPayload<ExtArgs>
        fields: Prisma.t_learnskillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_learnskillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_learnskillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_learnskillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_learnskillPayload>
          }
          findFirst: {
            args: Prisma.t_learnskillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_learnskillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_learnskillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_learnskillPayload>
          }
          findMany: {
            args: Prisma.t_learnskillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_learnskillPayload>[]
          }
          create: {
            args: Prisma.t_learnskillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_learnskillPayload>
          }
          createMany: {
            args: Prisma.t_learnskillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.t_learnskillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_learnskillPayload>[]
          }
          delete: {
            args: Prisma.t_learnskillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_learnskillPayload>
          }
          update: {
            args: Prisma.t_learnskillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_learnskillPayload>
          }
          deleteMany: {
            args: Prisma.t_learnskillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_learnskillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.t_learnskillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_learnskillPayload>[]
          }
          upsert: {
            args: Prisma.t_learnskillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_learnskillPayload>
          }
          aggregate: {
            args: Prisma.T_learnskillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_learnskill>
          }
          groupBy: {
            args: Prisma.t_learnskillGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_learnskillGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_learnskillCountArgs<ExtArgs>
            result: $Utils.Optional<T_learnskillCountAggregateOutputType> | number
          }
        }
      }
      t_category: {
        payload: Prisma.$t_categoryPayload<ExtArgs>
        fields: Prisma.t_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_categoryPayload>
          }
          findFirst: {
            args: Prisma.t_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_categoryPayload>
          }
          findMany: {
            args: Prisma.t_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_categoryPayload>[]
          }
          create: {
            args: Prisma.t_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_categoryPayload>
          }
          createMany: {
            args: Prisma.t_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.t_categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_categoryPayload>[]
          }
          delete: {
            args: Prisma.t_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_categoryPayload>
          }
          update: {
            args: Prisma.t_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_categoryPayload>
          }
          deleteMany: {
            args: Prisma.t_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.t_categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_categoryPayload>[]
          }
          upsert: {
            args: Prisma.t_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_categoryPayload>
          }
          aggregate: {
            args: Prisma.T_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_category>
          }
          groupBy: {
            args: Prisma.t_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<T_categoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    t_learnskill?: t_learnskillOmit
    t_category?: t_categoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type T_categoryCountOutputType
   */

  export type T_categoryCountOutputType = {
    skills: number
  }

  export type T_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | T_categoryCountOutputTypeCountSkillsArgs
  }

  // Custom InputTypes
  /**
   * T_categoryCountOutputType without action
   */
  export type T_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_categoryCountOutputType
     */
    select?: T_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * T_categoryCountOutputType without action
   */
  export type T_categoryCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_learnskillWhereInput
  }


  /**
   * Models
   */

  /**
   * Model t_learnskill
   */

  export type AggregateT_learnskill = {
    _count: T_learnskillCountAggregateOutputType | null
    _avg: T_learnskillAvgAggregateOutputType | null
    _sum: T_learnskillSumAggregateOutputType | null
    _min: T_learnskillMinAggregateOutputType | null
    _max: T_learnskillMaxAggregateOutputType | null
  }

  export type T_learnskillAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type T_learnskillSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type T_learnskillMinAggregateOutputType = {
    id: number | null
    skillname: string | null
    description: string | null
    enddate: Date | null
    isfinish: boolean | null
    deleteat: Date | null
    categoryId: number | null
  }

  export type T_learnskillMaxAggregateOutputType = {
    id: number | null
    skillname: string | null
    description: string | null
    enddate: Date | null
    isfinish: boolean | null
    deleteat: Date | null
    categoryId: number | null
  }

  export type T_learnskillCountAggregateOutputType = {
    id: number
    skillname: number
    description: number
    enddate: number
    isfinish: number
    deleteat: number
    metadata: number
    categoryId: number
    _all: number
  }


  export type T_learnskillAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type T_learnskillSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type T_learnskillMinAggregateInputType = {
    id?: true
    skillname?: true
    description?: true
    enddate?: true
    isfinish?: true
    deleteat?: true
    categoryId?: true
  }

  export type T_learnskillMaxAggregateInputType = {
    id?: true
    skillname?: true
    description?: true
    enddate?: true
    isfinish?: true
    deleteat?: true
    categoryId?: true
  }

  export type T_learnskillCountAggregateInputType = {
    id?: true
    skillname?: true
    description?: true
    enddate?: true
    isfinish?: true
    deleteat?: true
    metadata?: true
    categoryId?: true
    _all?: true
  }

  export type T_learnskillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_learnskill to aggregate.
     */
    where?: t_learnskillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_learnskills to fetch.
     */
    orderBy?: t_learnskillOrderByWithRelationInput | t_learnskillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_learnskillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_learnskills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_learnskills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_learnskills
    **/
    _count?: true | T_learnskillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_learnskillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_learnskillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_learnskillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_learnskillMaxAggregateInputType
  }

  export type GetT_learnskillAggregateType<T extends T_learnskillAggregateArgs> = {
        [P in keyof T & keyof AggregateT_learnskill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_learnskill[P]>
      : GetScalarType<T[P], AggregateT_learnskill[P]>
  }




  export type t_learnskillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_learnskillWhereInput
    orderBy?: t_learnskillOrderByWithAggregationInput | t_learnskillOrderByWithAggregationInput[]
    by: T_learnskillScalarFieldEnum[] | T_learnskillScalarFieldEnum
    having?: t_learnskillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_learnskillCountAggregateInputType | true
    _avg?: T_learnskillAvgAggregateInputType
    _sum?: T_learnskillSumAggregateInputType
    _min?: T_learnskillMinAggregateInputType
    _max?: T_learnskillMaxAggregateInputType
  }

  export type T_learnskillGroupByOutputType = {
    id: number
    skillname: string | null
    description: string | null
    enddate: Date | null
    isfinish: boolean | null
    deleteat: Date | null
    metadata: JsonValue | null
    categoryId: number | null
    _count: T_learnskillCountAggregateOutputType | null
    _avg: T_learnskillAvgAggregateOutputType | null
    _sum: T_learnskillSumAggregateOutputType | null
    _min: T_learnskillMinAggregateOutputType | null
    _max: T_learnskillMaxAggregateOutputType | null
  }

  type GetT_learnskillGroupByPayload<T extends t_learnskillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_learnskillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_learnskillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_learnskillGroupByOutputType[P]>
            : GetScalarType<T[P], T_learnskillGroupByOutputType[P]>
        }
      >
    >


  export type t_learnskillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillname?: boolean
    description?: boolean
    enddate?: boolean
    isfinish?: boolean
    deleteat?: boolean
    metadata?: boolean
    categoryId?: boolean
    category?: boolean | t_learnskill$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["t_learnskill"]>

  export type t_learnskillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillname?: boolean
    description?: boolean
    enddate?: boolean
    isfinish?: boolean
    deleteat?: boolean
    metadata?: boolean
    categoryId?: boolean
    category?: boolean | t_learnskill$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["t_learnskill"]>

  export type t_learnskillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillname?: boolean
    description?: boolean
    enddate?: boolean
    isfinish?: boolean
    deleteat?: boolean
    metadata?: boolean
    categoryId?: boolean
    category?: boolean | t_learnskill$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["t_learnskill"]>

  export type t_learnskillSelectScalar = {
    id?: boolean
    skillname?: boolean
    description?: boolean
    enddate?: boolean
    isfinish?: boolean
    deleteat?: boolean
    metadata?: boolean
    categoryId?: boolean
  }

  export type t_learnskillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skillname" | "description" | "enddate" | "isfinish" | "deleteat" | "metadata" | "categoryId", ExtArgs["result"]["t_learnskill"]>
  export type t_learnskillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | t_learnskill$categoryArgs<ExtArgs>
  }
  export type t_learnskillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | t_learnskill$categoryArgs<ExtArgs>
  }
  export type t_learnskillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | t_learnskill$categoryArgs<ExtArgs>
  }

  export type $t_learnskillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_learnskill"
    objects: {
      category: Prisma.$t_categoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      skillname: string | null
      description: string | null
      enddate: Date | null
      isfinish: boolean | null
      deleteat: Date | null
      metadata: Prisma.JsonValue | null
      categoryId: number | null
    }, ExtArgs["result"]["t_learnskill"]>
    composites: {}
  }

  type t_learnskillGetPayload<S extends boolean | null | undefined | t_learnskillDefaultArgs> = $Result.GetResult<Prisma.$t_learnskillPayload, S>

  type t_learnskillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_learnskillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_learnskillCountAggregateInputType | true
    }

  export interface t_learnskillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_learnskill'], meta: { name: 't_learnskill' } }
    /**
     * Find zero or one T_learnskill that matches the filter.
     * @param {t_learnskillFindUniqueArgs} args - Arguments to find a T_learnskill
     * @example
     * // Get one T_learnskill
     * const t_learnskill = await prisma.t_learnskill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_learnskillFindUniqueArgs>(args: SelectSubset<T, t_learnskillFindUniqueArgs<ExtArgs>>): Prisma__t_learnskillClient<$Result.GetResult<Prisma.$t_learnskillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_learnskill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_learnskillFindUniqueOrThrowArgs} args - Arguments to find a T_learnskill
     * @example
     * // Get one T_learnskill
     * const t_learnskill = await prisma.t_learnskill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_learnskillFindUniqueOrThrowArgs>(args: SelectSubset<T, t_learnskillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_learnskillClient<$Result.GetResult<Prisma.$t_learnskillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_learnskill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_learnskillFindFirstArgs} args - Arguments to find a T_learnskill
     * @example
     * // Get one T_learnskill
     * const t_learnskill = await prisma.t_learnskill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_learnskillFindFirstArgs>(args?: SelectSubset<T, t_learnskillFindFirstArgs<ExtArgs>>): Prisma__t_learnskillClient<$Result.GetResult<Prisma.$t_learnskillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_learnskill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_learnskillFindFirstOrThrowArgs} args - Arguments to find a T_learnskill
     * @example
     * // Get one T_learnskill
     * const t_learnskill = await prisma.t_learnskill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_learnskillFindFirstOrThrowArgs>(args?: SelectSubset<T, t_learnskillFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_learnskillClient<$Result.GetResult<Prisma.$t_learnskillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_learnskills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_learnskillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_learnskills
     * const t_learnskills = await prisma.t_learnskill.findMany()
     * 
     * // Get first 10 T_learnskills
     * const t_learnskills = await prisma.t_learnskill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_learnskillWithIdOnly = await prisma.t_learnskill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends t_learnskillFindManyArgs>(args?: SelectSubset<T, t_learnskillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_learnskillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_learnskill.
     * @param {t_learnskillCreateArgs} args - Arguments to create a T_learnskill.
     * @example
     * // Create one T_learnskill
     * const T_learnskill = await prisma.t_learnskill.create({
     *   data: {
     *     // ... data to create a T_learnskill
     *   }
     * })
     * 
     */
    create<T extends t_learnskillCreateArgs>(args: SelectSubset<T, t_learnskillCreateArgs<ExtArgs>>): Prisma__t_learnskillClient<$Result.GetResult<Prisma.$t_learnskillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_learnskills.
     * @param {t_learnskillCreateManyArgs} args - Arguments to create many T_learnskills.
     * @example
     * // Create many T_learnskills
     * const t_learnskill = await prisma.t_learnskill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_learnskillCreateManyArgs>(args?: SelectSubset<T, t_learnskillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_learnskills and returns the data saved in the database.
     * @param {t_learnskillCreateManyAndReturnArgs} args - Arguments to create many T_learnskills.
     * @example
     * // Create many T_learnskills
     * const t_learnskill = await prisma.t_learnskill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_learnskills and only return the `id`
     * const t_learnskillWithIdOnly = await prisma.t_learnskill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends t_learnskillCreateManyAndReturnArgs>(args?: SelectSubset<T, t_learnskillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_learnskillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_learnskill.
     * @param {t_learnskillDeleteArgs} args - Arguments to delete one T_learnskill.
     * @example
     * // Delete one T_learnskill
     * const T_learnskill = await prisma.t_learnskill.delete({
     *   where: {
     *     // ... filter to delete one T_learnskill
     *   }
     * })
     * 
     */
    delete<T extends t_learnskillDeleteArgs>(args: SelectSubset<T, t_learnskillDeleteArgs<ExtArgs>>): Prisma__t_learnskillClient<$Result.GetResult<Prisma.$t_learnskillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_learnskill.
     * @param {t_learnskillUpdateArgs} args - Arguments to update one T_learnskill.
     * @example
     * // Update one T_learnskill
     * const t_learnskill = await prisma.t_learnskill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_learnskillUpdateArgs>(args: SelectSubset<T, t_learnskillUpdateArgs<ExtArgs>>): Prisma__t_learnskillClient<$Result.GetResult<Prisma.$t_learnskillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_learnskills.
     * @param {t_learnskillDeleteManyArgs} args - Arguments to filter T_learnskills to delete.
     * @example
     * // Delete a few T_learnskills
     * const { count } = await prisma.t_learnskill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_learnskillDeleteManyArgs>(args?: SelectSubset<T, t_learnskillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_learnskills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_learnskillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_learnskills
     * const t_learnskill = await prisma.t_learnskill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_learnskillUpdateManyArgs>(args: SelectSubset<T, t_learnskillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_learnskills and returns the data updated in the database.
     * @param {t_learnskillUpdateManyAndReturnArgs} args - Arguments to update many T_learnskills.
     * @example
     * // Update many T_learnskills
     * const t_learnskill = await prisma.t_learnskill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_learnskills and only return the `id`
     * const t_learnskillWithIdOnly = await prisma.t_learnskill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends t_learnskillUpdateManyAndReturnArgs>(args: SelectSubset<T, t_learnskillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_learnskillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_learnskill.
     * @param {t_learnskillUpsertArgs} args - Arguments to update or create a T_learnskill.
     * @example
     * // Update or create a T_learnskill
     * const t_learnskill = await prisma.t_learnskill.upsert({
     *   create: {
     *     // ... data to create a T_learnskill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_learnskill we want to update
     *   }
     * })
     */
    upsert<T extends t_learnskillUpsertArgs>(args: SelectSubset<T, t_learnskillUpsertArgs<ExtArgs>>): Prisma__t_learnskillClient<$Result.GetResult<Prisma.$t_learnskillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_learnskills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_learnskillCountArgs} args - Arguments to filter T_learnskills to count.
     * @example
     * // Count the number of T_learnskills
     * const count = await prisma.t_learnskill.count({
     *   where: {
     *     // ... the filter for the T_learnskills we want to count
     *   }
     * })
    **/
    count<T extends t_learnskillCountArgs>(
      args?: Subset<T, t_learnskillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_learnskillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_learnskill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_learnskillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_learnskillAggregateArgs>(args: Subset<T, T_learnskillAggregateArgs>): Prisma.PrismaPromise<GetT_learnskillAggregateType<T>>

    /**
     * Group by T_learnskill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_learnskillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_learnskillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_learnskillGroupByArgs['orderBy'] }
        : { orderBy?: t_learnskillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_learnskillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_learnskillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_learnskill model
   */
  readonly fields: t_learnskillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_learnskill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_learnskillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends t_learnskill$categoryArgs<ExtArgs> = {}>(args?: Subset<T, t_learnskill$categoryArgs<ExtArgs>>): Prisma__t_categoryClient<$Result.GetResult<Prisma.$t_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the t_learnskill model
   */
  interface t_learnskillFieldRefs {
    readonly id: FieldRef<"t_learnskill", 'Int'>
    readonly skillname: FieldRef<"t_learnskill", 'String'>
    readonly description: FieldRef<"t_learnskill", 'String'>
    readonly enddate: FieldRef<"t_learnskill", 'DateTime'>
    readonly isfinish: FieldRef<"t_learnskill", 'Boolean'>
    readonly deleteat: FieldRef<"t_learnskill", 'DateTime'>
    readonly metadata: FieldRef<"t_learnskill", 'Json'>
    readonly categoryId: FieldRef<"t_learnskill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * t_learnskill findUnique
   */
  export type t_learnskillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_learnskill
     */
    select?: t_learnskillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_learnskill
     */
    omit?: t_learnskillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_learnskillInclude<ExtArgs> | null
    /**
     * Filter, which t_learnskill to fetch.
     */
    where: t_learnskillWhereUniqueInput
  }

  /**
   * t_learnskill findUniqueOrThrow
   */
  export type t_learnskillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_learnskill
     */
    select?: t_learnskillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_learnskill
     */
    omit?: t_learnskillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_learnskillInclude<ExtArgs> | null
    /**
     * Filter, which t_learnskill to fetch.
     */
    where: t_learnskillWhereUniqueInput
  }

  /**
   * t_learnskill findFirst
   */
  export type t_learnskillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_learnskill
     */
    select?: t_learnskillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_learnskill
     */
    omit?: t_learnskillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_learnskillInclude<ExtArgs> | null
    /**
     * Filter, which t_learnskill to fetch.
     */
    where?: t_learnskillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_learnskills to fetch.
     */
    orderBy?: t_learnskillOrderByWithRelationInput | t_learnskillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_learnskills.
     */
    cursor?: t_learnskillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_learnskills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_learnskills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_learnskills.
     */
    distinct?: T_learnskillScalarFieldEnum | T_learnskillScalarFieldEnum[]
  }

  /**
   * t_learnskill findFirstOrThrow
   */
  export type t_learnskillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_learnskill
     */
    select?: t_learnskillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_learnskill
     */
    omit?: t_learnskillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_learnskillInclude<ExtArgs> | null
    /**
     * Filter, which t_learnskill to fetch.
     */
    where?: t_learnskillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_learnskills to fetch.
     */
    orderBy?: t_learnskillOrderByWithRelationInput | t_learnskillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_learnskills.
     */
    cursor?: t_learnskillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_learnskills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_learnskills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_learnskills.
     */
    distinct?: T_learnskillScalarFieldEnum | T_learnskillScalarFieldEnum[]
  }

  /**
   * t_learnskill findMany
   */
  export type t_learnskillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_learnskill
     */
    select?: t_learnskillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_learnskill
     */
    omit?: t_learnskillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_learnskillInclude<ExtArgs> | null
    /**
     * Filter, which t_learnskills to fetch.
     */
    where?: t_learnskillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_learnskills to fetch.
     */
    orderBy?: t_learnskillOrderByWithRelationInput | t_learnskillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_learnskills.
     */
    cursor?: t_learnskillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_learnskills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_learnskills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_learnskills.
     */
    distinct?: T_learnskillScalarFieldEnum | T_learnskillScalarFieldEnum[]
  }

  /**
   * t_learnskill create
   */
  export type t_learnskillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_learnskill
     */
    select?: t_learnskillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_learnskill
     */
    omit?: t_learnskillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_learnskillInclude<ExtArgs> | null
    /**
     * The data needed to create a t_learnskill.
     */
    data?: XOR<t_learnskillCreateInput, t_learnskillUncheckedCreateInput>
  }

  /**
   * t_learnskill createMany
   */
  export type t_learnskillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_learnskills.
     */
    data: t_learnskillCreateManyInput | t_learnskillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_learnskill createManyAndReturn
   */
  export type t_learnskillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_learnskill
     */
    select?: t_learnskillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the t_learnskill
     */
    omit?: t_learnskillOmit<ExtArgs> | null
    /**
     * The data used to create many t_learnskills.
     */
    data: t_learnskillCreateManyInput | t_learnskillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_learnskillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * t_learnskill update
   */
  export type t_learnskillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_learnskill
     */
    select?: t_learnskillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_learnskill
     */
    omit?: t_learnskillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_learnskillInclude<ExtArgs> | null
    /**
     * The data needed to update a t_learnskill.
     */
    data: XOR<t_learnskillUpdateInput, t_learnskillUncheckedUpdateInput>
    /**
     * Choose, which t_learnskill to update.
     */
    where: t_learnskillWhereUniqueInput
  }

  /**
   * t_learnskill updateMany
   */
  export type t_learnskillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_learnskills.
     */
    data: XOR<t_learnskillUpdateManyMutationInput, t_learnskillUncheckedUpdateManyInput>
    /**
     * Filter which t_learnskills to update
     */
    where?: t_learnskillWhereInput
    /**
     * Limit how many t_learnskills to update.
     */
    limit?: number
  }

  /**
   * t_learnskill updateManyAndReturn
   */
  export type t_learnskillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_learnskill
     */
    select?: t_learnskillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the t_learnskill
     */
    omit?: t_learnskillOmit<ExtArgs> | null
    /**
     * The data used to update t_learnskills.
     */
    data: XOR<t_learnskillUpdateManyMutationInput, t_learnskillUncheckedUpdateManyInput>
    /**
     * Filter which t_learnskills to update
     */
    where?: t_learnskillWhereInput
    /**
     * Limit how many t_learnskills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_learnskillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * t_learnskill upsert
   */
  export type t_learnskillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_learnskill
     */
    select?: t_learnskillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_learnskill
     */
    omit?: t_learnskillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_learnskillInclude<ExtArgs> | null
    /**
     * The filter to search for the t_learnskill to update in case it exists.
     */
    where: t_learnskillWhereUniqueInput
    /**
     * In case the t_learnskill found by the `where` argument doesn't exist, create a new t_learnskill with this data.
     */
    create: XOR<t_learnskillCreateInput, t_learnskillUncheckedCreateInput>
    /**
     * In case the t_learnskill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_learnskillUpdateInput, t_learnskillUncheckedUpdateInput>
  }

  /**
   * t_learnskill delete
   */
  export type t_learnskillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_learnskill
     */
    select?: t_learnskillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_learnskill
     */
    omit?: t_learnskillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_learnskillInclude<ExtArgs> | null
    /**
     * Filter which t_learnskill to delete.
     */
    where: t_learnskillWhereUniqueInput
  }

  /**
   * t_learnskill deleteMany
   */
  export type t_learnskillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_learnskills to delete
     */
    where?: t_learnskillWhereInput
    /**
     * Limit how many t_learnskills to delete.
     */
    limit?: number
  }

  /**
   * t_learnskill.category
   */
  export type t_learnskill$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_category
     */
    select?: t_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_category
     */
    omit?: t_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_categoryInclude<ExtArgs> | null
    where?: t_categoryWhereInput
  }

  /**
   * t_learnskill without action
   */
  export type t_learnskillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_learnskill
     */
    select?: t_learnskillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_learnskill
     */
    omit?: t_learnskillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_learnskillInclude<ExtArgs> | null
  }


  /**
   * Model t_category
   */

  export type AggregateT_category = {
    _count: T_categoryCountAggregateOutputType | null
    _avg: T_categoryAvgAggregateOutputType | null
    _sum: T_categorySumAggregateOutputType | null
    _min: T_categoryMinAggregateOutputType | null
    _max: T_categoryMaxAggregateOutputType | null
  }

  export type T_categoryAvgAggregateOutputType = {
    id: number | null
  }

  export type T_categorySumAggregateOutputType = {
    id: number | null
  }

  export type T_categoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    deleteat: Date | null
  }

  export type T_categoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    deleteat: Date | null
  }

  export type T_categoryCountAggregateOutputType = {
    id: number
    name: number
    deleteat: number
    _all: number
  }


  export type T_categoryAvgAggregateInputType = {
    id?: true
  }

  export type T_categorySumAggregateInputType = {
    id?: true
  }

  export type T_categoryMinAggregateInputType = {
    id?: true
    name?: true
    deleteat?: true
  }

  export type T_categoryMaxAggregateInputType = {
    id?: true
    name?: true
    deleteat?: true
  }

  export type T_categoryCountAggregateInputType = {
    id?: true
    name?: true
    deleteat?: true
    _all?: true
  }

  export type T_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_category to aggregate.
     */
    where?: t_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_categories to fetch.
     */
    orderBy?: t_categoryOrderByWithRelationInput | t_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_categories
    **/
    _count?: true | T_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_categoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_categorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_categoryMaxAggregateInputType
  }

  export type GetT_categoryAggregateType<T extends T_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateT_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_category[P]>
      : GetScalarType<T[P], AggregateT_category[P]>
  }




  export type t_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_categoryWhereInput
    orderBy?: t_categoryOrderByWithAggregationInput | t_categoryOrderByWithAggregationInput[]
    by: T_categoryScalarFieldEnum[] | T_categoryScalarFieldEnum
    having?: t_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_categoryCountAggregateInputType | true
    _avg?: T_categoryAvgAggregateInputType
    _sum?: T_categorySumAggregateInputType
    _min?: T_categoryMinAggregateInputType
    _max?: T_categoryMaxAggregateInputType
  }

  export type T_categoryGroupByOutputType = {
    id: number
    name: string
    deleteat: Date | null
    _count: T_categoryCountAggregateOutputType | null
    _avg: T_categoryAvgAggregateOutputType | null
    _sum: T_categorySumAggregateOutputType | null
    _min: T_categoryMinAggregateOutputType | null
    _max: T_categoryMaxAggregateOutputType | null
  }

  type GetT_categoryGroupByPayload<T extends t_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], T_categoryGroupByOutputType[P]>
        }
      >
    >


  export type t_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deleteat?: boolean
    skills?: boolean | t_category$skillsArgs<ExtArgs>
    _count?: boolean | T_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_category"]>

  export type t_categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deleteat?: boolean
  }, ExtArgs["result"]["t_category"]>

  export type t_categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deleteat?: boolean
  }, ExtArgs["result"]["t_category"]>

  export type t_categorySelectScalar = {
    id?: boolean
    name?: boolean
    deleteat?: boolean
  }

  export type t_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "deleteat", ExtArgs["result"]["t_category"]>
  export type t_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | t_category$skillsArgs<ExtArgs>
    _count?: boolean | T_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type t_categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type t_categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $t_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_category"
    objects: {
      skills: Prisma.$t_learnskillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      deleteat: Date | null
    }, ExtArgs["result"]["t_category"]>
    composites: {}
  }

  type t_categoryGetPayload<S extends boolean | null | undefined | t_categoryDefaultArgs> = $Result.GetResult<Prisma.$t_categoryPayload, S>

  type t_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_categoryCountAggregateInputType | true
    }

  export interface t_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_category'], meta: { name: 't_category' } }
    /**
     * Find zero or one T_category that matches the filter.
     * @param {t_categoryFindUniqueArgs} args - Arguments to find a T_category
     * @example
     * // Get one T_category
     * const t_category = await prisma.t_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_categoryFindUniqueArgs>(args: SelectSubset<T, t_categoryFindUniqueArgs<ExtArgs>>): Prisma__t_categoryClient<$Result.GetResult<Prisma.$t_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_categoryFindUniqueOrThrowArgs} args - Arguments to find a T_category
     * @example
     * // Get one T_category
     * const t_category = await prisma.t_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, t_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_categoryClient<$Result.GetResult<Prisma.$t_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_categoryFindFirstArgs} args - Arguments to find a T_category
     * @example
     * // Get one T_category
     * const t_category = await prisma.t_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_categoryFindFirstArgs>(args?: SelectSubset<T, t_categoryFindFirstArgs<ExtArgs>>): Prisma__t_categoryClient<$Result.GetResult<Prisma.$t_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_categoryFindFirstOrThrowArgs} args - Arguments to find a T_category
     * @example
     * // Get one T_category
     * const t_category = await prisma.t_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, t_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_categoryClient<$Result.GetResult<Prisma.$t_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_categories
     * const t_categories = await prisma.t_category.findMany()
     * 
     * // Get first 10 T_categories
     * const t_categories = await prisma.t_category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_categoryWithIdOnly = await prisma.t_category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends t_categoryFindManyArgs>(args?: SelectSubset<T, t_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_category.
     * @param {t_categoryCreateArgs} args - Arguments to create a T_category.
     * @example
     * // Create one T_category
     * const T_category = await prisma.t_category.create({
     *   data: {
     *     // ... data to create a T_category
     *   }
     * })
     * 
     */
    create<T extends t_categoryCreateArgs>(args: SelectSubset<T, t_categoryCreateArgs<ExtArgs>>): Prisma__t_categoryClient<$Result.GetResult<Prisma.$t_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_categories.
     * @param {t_categoryCreateManyArgs} args - Arguments to create many T_categories.
     * @example
     * // Create many T_categories
     * const t_category = await prisma.t_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_categoryCreateManyArgs>(args?: SelectSubset<T, t_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_categories and returns the data saved in the database.
     * @param {t_categoryCreateManyAndReturnArgs} args - Arguments to create many T_categories.
     * @example
     * // Create many T_categories
     * const t_category = await prisma.t_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_categories and only return the `id`
     * const t_categoryWithIdOnly = await prisma.t_category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends t_categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, t_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_category.
     * @param {t_categoryDeleteArgs} args - Arguments to delete one T_category.
     * @example
     * // Delete one T_category
     * const T_category = await prisma.t_category.delete({
     *   where: {
     *     // ... filter to delete one T_category
     *   }
     * })
     * 
     */
    delete<T extends t_categoryDeleteArgs>(args: SelectSubset<T, t_categoryDeleteArgs<ExtArgs>>): Prisma__t_categoryClient<$Result.GetResult<Prisma.$t_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_category.
     * @param {t_categoryUpdateArgs} args - Arguments to update one T_category.
     * @example
     * // Update one T_category
     * const t_category = await prisma.t_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_categoryUpdateArgs>(args: SelectSubset<T, t_categoryUpdateArgs<ExtArgs>>): Prisma__t_categoryClient<$Result.GetResult<Prisma.$t_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_categories.
     * @param {t_categoryDeleteManyArgs} args - Arguments to filter T_categories to delete.
     * @example
     * // Delete a few T_categories
     * const { count } = await prisma.t_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_categoryDeleteManyArgs>(args?: SelectSubset<T, t_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_categories
     * const t_category = await prisma.t_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_categoryUpdateManyArgs>(args: SelectSubset<T, t_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_categories and returns the data updated in the database.
     * @param {t_categoryUpdateManyAndReturnArgs} args - Arguments to update many T_categories.
     * @example
     * // Update many T_categories
     * const t_category = await prisma.t_category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_categories and only return the `id`
     * const t_categoryWithIdOnly = await prisma.t_category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends t_categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, t_categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_category.
     * @param {t_categoryUpsertArgs} args - Arguments to update or create a T_category.
     * @example
     * // Update or create a T_category
     * const t_category = await prisma.t_category.upsert({
     *   create: {
     *     // ... data to create a T_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_category we want to update
     *   }
     * })
     */
    upsert<T extends t_categoryUpsertArgs>(args: SelectSubset<T, t_categoryUpsertArgs<ExtArgs>>): Prisma__t_categoryClient<$Result.GetResult<Prisma.$t_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_categoryCountArgs} args - Arguments to filter T_categories to count.
     * @example
     * // Count the number of T_categories
     * const count = await prisma.t_category.count({
     *   where: {
     *     // ... the filter for the T_categories we want to count
     *   }
     * })
    **/
    count<T extends t_categoryCountArgs>(
      args?: Subset<T, t_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_categoryAggregateArgs>(args: Subset<T, T_categoryAggregateArgs>): Prisma.PrismaPromise<GetT_categoryAggregateType<T>>

    /**
     * Group by T_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_categoryGroupByArgs['orderBy'] }
        : { orderBy?: t_categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_category model
   */
  readonly fields: t_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends t_category$skillsArgs<ExtArgs> = {}>(args?: Subset<T, t_category$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_learnskillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the t_category model
   */
  interface t_categoryFieldRefs {
    readonly id: FieldRef<"t_category", 'Int'>
    readonly name: FieldRef<"t_category", 'String'>
    readonly deleteat: FieldRef<"t_category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * t_category findUnique
   */
  export type t_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_category
     */
    select?: t_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_category
     */
    omit?: t_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_categoryInclude<ExtArgs> | null
    /**
     * Filter, which t_category to fetch.
     */
    where: t_categoryWhereUniqueInput
  }

  /**
   * t_category findUniqueOrThrow
   */
  export type t_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_category
     */
    select?: t_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_category
     */
    omit?: t_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_categoryInclude<ExtArgs> | null
    /**
     * Filter, which t_category to fetch.
     */
    where: t_categoryWhereUniqueInput
  }

  /**
   * t_category findFirst
   */
  export type t_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_category
     */
    select?: t_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_category
     */
    omit?: t_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_categoryInclude<ExtArgs> | null
    /**
     * Filter, which t_category to fetch.
     */
    where?: t_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_categories to fetch.
     */
    orderBy?: t_categoryOrderByWithRelationInput | t_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_categories.
     */
    cursor?: t_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_categories.
     */
    distinct?: T_categoryScalarFieldEnum | T_categoryScalarFieldEnum[]
  }

  /**
   * t_category findFirstOrThrow
   */
  export type t_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_category
     */
    select?: t_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_category
     */
    omit?: t_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_categoryInclude<ExtArgs> | null
    /**
     * Filter, which t_category to fetch.
     */
    where?: t_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_categories to fetch.
     */
    orderBy?: t_categoryOrderByWithRelationInput | t_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_categories.
     */
    cursor?: t_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_categories.
     */
    distinct?: T_categoryScalarFieldEnum | T_categoryScalarFieldEnum[]
  }

  /**
   * t_category findMany
   */
  export type t_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_category
     */
    select?: t_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_category
     */
    omit?: t_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_categoryInclude<ExtArgs> | null
    /**
     * Filter, which t_categories to fetch.
     */
    where?: t_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_categories to fetch.
     */
    orderBy?: t_categoryOrderByWithRelationInput | t_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_categories.
     */
    cursor?: t_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_categories.
     */
    distinct?: T_categoryScalarFieldEnum | T_categoryScalarFieldEnum[]
  }

  /**
   * t_category create
   */
  export type t_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_category
     */
    select?: t_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_category
     */
    omit?: t_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a t_category.
     */
    data: XOR<t_categoryCreateInput, t_categoryUncheckedCreateInput>
  }

  /**
   * t_category createMany
   */
  export type t_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_categories.
     */
    data: t_categoryCreateManyInput | t_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_category createManyAndReturn
   */
  export type t_categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_category
     */
    select?: t_categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the t_category
     */
    omit?: t_categoryOmit<ExtArgs> | null
    /**
     * The data used to create many t_categories.
     */
    data: t_categoryCreateManyInput | t_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_category update
   */
  export type t_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_category
     */
    select?: t_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_category
     */
    omit?: t_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a t_category.
     */
    data: XOR<t_categoryUpdateInput, t_categoryUncheckedUpdateInput>
    /**
     * Choose, which t_category to update.
     */
    where: t_categoryWhereUniqueInput
  }

  /**
   * t_category updateMany
   */
  export type t_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_categories.
     */
    data: XOR<t_categoryUpdateManyMutationInput, t_categoryUncheckedUpdateManyInput>
    /**
     * Filter which t_categories to update
     */
    where?: t_categoryWhereInput
    /**
     * Limit how many t_categories to update.
     */
    limit?: number
  }

  /**
   * t_category updateManyAndReturn
   */
  export type t_categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_category
     */
    select?: t_categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the t_category
     */
    omit?: t_categoryOmit<ExtArgs> | null
    /**
     * The data used to update t_categories.
     */
    data: XOR<t_categoryUpdateManyMutationInput, t_categoryUncheckedUpdateManyInput>
    /**
     * Filter which t_categories to update
     */
    where?: t_categoryWhereInput
    /**
     * Limit how many t_categories to update.
     */
    limit?: number
  }

  /**
   * t_category upsert
   */
  export type t_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_category
     */
    select?: t_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_category
     */
    omit?: t_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the t_category to update in case it exists.
     */
    where: t_categoryWhereUniqueInput
    /**
     * In case the t_category found by the `where` argument doesn't exist, create a new t_category with this data.
     */
    create: XOR<t_categoryCreateInput, t_categoryUncheckedCreateInput>
    /**
     * In case the t_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_categoryUpdateInput, t_categoryUncheckedUpdateInput>
  }

  /**
   * t_category delete
   */
  export type t_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_category
     */
    select?: t_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_category
     */
    omit?: t_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_categoryInclude<ExtArgs> | null
    /**
     * Filter which t_category to delete.
     */
    where: t_categoryWhereUniqueInput
  }

  /**
   * t_category deleteMany
   */
  export type t_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_categories to delete
     */
    where?: t_categoryWhereInput
    /**
     * Limit how many t_categories to delete.
     */
    limit?: number
  }

  /**
   * t_category.skills
   */
  export type t_category$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_learnskill
     */
    select?: t_learnskillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_learnskill
     */
    omit?: t_learnskillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_learnskillInclude<ExtArgs> | null
    where?: t_learnskillWhereInput
    orderBy?: t_learnskillOrderByWithRelationInput | t_learnskillOrderByWithRelationInput[]
    cursor?: t_learnskillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_learnskillScalarFieldEnum | T_learnskillScalarFieldEnum[]
  }

  /**
   * t_category without action
   */
  export type t_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_category
     */
    select?: t_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_category
     */
    omit?: t_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_categoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const T_learnskillScalarFieldEnum: {
    id: 'id',
    skillname: 'skillname',
    description: 'description',
    enddate: 'enddate',
    isfinish: 'isfinish',
    deleteat: 'deleteat',
    metadata: 'metadata',
    categoryId: 'categoryId'
  };

  export type T_learnskillScalarFieldEnum = (typeof T_learnskillScalarFieldEnum)[keyof typeof T_learnskillScalarFieldEnum]


  export const T_categoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    deleteat: 'deleteat'
  };

  export type T_categoryScalarFieldEnum = (typeof T_categoryScalarFieldEnum)[keyof typeof T_categoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type t_learnskillWhereInput = {
    AND?: t_learnskillWhereInput | t_learnskillWhereInput[]
    OR?: t_learnskillWhereInput[]
    NOT?: t_learnskillWhereInput | t_learnskillWhereInput[]
    id?: IntFilter<"t_learnskill"> | number
    skillname?: StringNullableFilter<"t_learnskill"> | string | null
    description?: StringNullableFilter<"t_learnskill"> | string | null
    enddate?: DateTimeNullableFilter<"t_learnskill"> | Date | string | null
    isfinish?: BoolNullableFilter<"t_learnskill"> | boolean | null
    deleteat?: DateTimeNullableFilter<"t_learnskill"> | Date | string | null
    metadata?: JsonNullableFilter<"t_learnskill">
    categoryId?: IntNullableFilter<"t_learnskill"> | number | null
    category?: XOR<T_categoryNullableScalarRelationFilter, t_categoryWhereInput> | null
  }

  export type t_learnskillOrderByWithRelationInput = {
    id?: SortOrder
    skillname?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    enddate?: SortOrderInput | SortOrder
    isfinish?: SortOrderInput | SortOrder
    deleteat?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    category?: t_categoryOrderByWithRelationInput
  }

  export type t_learnskillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: t_learnskillWhereInput | t_learnskillWhereInput[]
    OR?: t_learnskillWhereInput[]
    NOT?: t_learnskillWhereInput | t_learnskillWhereInput[]
    skillname?: StringNullableFilter<"t_learnskill"> | string | null
    description?: StringNullableFilter<"t_learnskill"> | string | null
    enddate?: DateTimeNullableFilter<"t_learnskill"> | Date | string | null
    isfinish?: BoolNullableFilter<"t_learnskill"> | boolean | null
    deleteat?: DateTimeNullableFilter<"t_learnskill"> | Date | string | null
    metadata?: JsonNullableFilter<"t_learnskill">
    categoryId?: IntNullableFilter<"t_learnskill"> | number | null
    category?: XOR<T_categoryNullableScalarRelationFilter, t_categoryWhereInput> | null
  }, "id">

  export type t_learnskillOrderByWithAggregationInput = {
    id?: SortOrder
    skillname?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    enddate?: SortOrderInput | SortOrder
    isfinish?: SortOrderInput | SortOrder
    deleteat?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: t_learnskillCountOrderByAggregateInput
    _avg?: t_learnskillAvgOrderByAggregateInput
    _max?: t_learnskillMaxOrderByAggregateInput
    _min?: t_learnskillMinOrderByAggregateInput
    _sum?: t_learnskillSumOrderByAggregateInput
  }

  export type t_learnskillScalarWhereWithAggregatesInput = {
    AND?: t_learnskillScalarWhereWithAggregatesInput | t_learnskillScalarWhereWithAggregatesInput[]
    OR?: t_learnskillScalarWhereWithAggregatesInput[]
    NOT?: t_learnskillScalarWhereWithAggregatesInput | t_learnskillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"t_learnskill"> | number
    skillname?: StringNullableWithAggregatesFilter<"t_learnskill"> | string | null
    description?: StringNullableWithAggregatesFilter<"t_learnskill"> | string | null
    enddate?: DateTimeNullableWithAggregatesFilter<"t_learnskill"> | Date | string | null
    isfinish?: BoolNullableWithAggregatesFilter<"t_learnskill"> | boolean | null
    deleteat?: DateTimeNullableWithAggregatesFilter<"t_learnskill"> | Date | string | null
    metadata?: JsonNullableWithAggregatesFilter<"t_learnskill">
    categoryId?: IntNullableWithAggregatesFilter<"t_learnskill"> | number | null
  }

  export type t_categoryWhereInput = {
    AND?: t_categoryWhereInput | t_categoryWhereInput[]
    OR?: t_categoryWhereInput[]
    NOT?: t_categoryWhereInput | t_categoryWhereInput[]
    id?: IntFilter<"t_category"> | number
    name?: StringFilter<"t_category"> | string
    deleteat?: DateTimeNullableFilter<"t_category"> | Date | string | null
    skills?: T_learnskillListRelationFilter
  }

  export type t_categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    deleteat?: SortOrderInput | SortOrder
    skills?: t_learnskillOrderByRelationAggregateInput
  }

  export type t_categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: t_categoryWhereInput | t_categoryWhereInput[]
    OR?: t_categoryWhereInput[]
    NOT?: t_categoryWhereInput | t_categoryWhereInput[]
    deleteat?: DateTimeNullableFilter<"t_category"> | Date | string | null
    skills?: T_learnskillListRelationFilter
  }, "id" | "name">

  export type t_categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    deleteat?: SortOrderInput | SortOrder
    _count?: t_categoryCountOrderByAggregateInput
    _avg?: t_categoryAvgOrderByAggregateInput
    _max?: t_categoryMaxOrderByAggregateInput
    _min?: t_categoryMinOrderByAggregateInput
    _sum?: t_categorySumOrderByAggregateInput
  }

  export type t_categoryScalarWhereWithAggregatesInput = {
    AND?: t_categoryScalarWhereWithAggregatesInput | t_categoryScalarWhereWithAggregatesInput[]
    OR?: t_categoryScalarWhereWithAggregatesInput[]
    NOT?: t_categoryScalarWhereWithAggregatesInput | t_categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"t_category"> | number
    name?: StringWithAggregatesFilter<"t_category"> | string
    deleteat?: DateTimeNullableWithAggregatesFilter<"t_category"> | Date | string | null
  }

  export type t_learnskillCreateInput = {
    skillname?: string | null
    description?: string | null
    enddate?: Date | string | null
    isfinish?: boolean | null
    deleteat?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    category?: t_categoryCreateNestedOneWithoutSkillsInput
  }

  export type t_learnskillUncheckedCreateInput = {
    id?: number
    skillname?: string | null
    description?: string | null
    enddate?: Date | string | null
    isfinish?: boolean | null
    deleteat?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    categoryId?: number | null
  }

  export type t_learnskillUpdateInput = {
    skillname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isfinish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleteat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    category?: t_categoryUpdateOneWithoutSkillsNestedInput
  }

  export type t_learnskillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isfinish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleteat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type t_learnskillCreateManyInput = {
    id?: number
    skillname?: string | null
    description?: string | null
    enddate?: Date | string | null
    isfinish?: boolean | null
    deleteat?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    categoryId?: number | null
  }

  export type t_learnskillUpdateManyMutationInput = {
    skillname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isfinish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleteat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type t_learnskillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isfinish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleteat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type t_categoryCreateInput = {
    name: string
    deleteat?: Date | string | null
    skills?: t_learnskillCreateNestedManyWithoutCategoryInput
  }

  export type t_categoryUncheckedCreateInput = {
    id?: number
    name: string
    deleteat?: Date | string | null
    skills?: t_learnskillUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type t_categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleteat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skills?: t_learnskillUpdateManyWithoutCategoryNestedInput
  }

  export type t_categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleteat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skills?: t_learnskillUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type t_categoryCreateManyInput = {
    id?: number
    name: string
    deleteat?: Date | string | null
  }

  export type t_categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleteat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleteat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type T_categoryNullableScalarRelationFilter = {
    is?: t_categoryWhereInput | null
    isNot?: t_categoryWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type t_learnskillCountOrderByAggregateInput = {
    id?: SortOrder
    skillname?: SortOrder
    description?: SortOrder
    enddate?: SortOrder
    isfinish?: SortOrder
    deleteat?: SortOrder
    metadata?: SortOrder
    categoryId?: SortOrder
  }

  export type t_learnskillAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type t_learnskillMaxOrderByAggregateInput = {
    id?: SortOrder
    skillname?: SortOrder
    description?: SortOrder
    enddate?: SortOrder
    isfinish?: SortOrder
    deleteat?: SortOrder
    categoryId?: SortOrder
  }

  export type t_learnskillMinOrderByAggregateInput = {
    id?: SortOrder
    skillname?: SortOrder
    description?: SortOrder
    enddate?: SortOrder
    isfinish?: SortOrder
    deleteat?: SortOrder
    categoryId?: SortOrder
  }

  export type t_learnskillSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type T_learnskillListRelationFilter = {
    every?: t_learnskillWhereInput
    some?: t_learnskillWhereInput
    none?: t_learnskillWhereInput
  }

  export type t_learnskillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type t_categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deleteat?: SortOrder
  }

  export type t_categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type t_categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deleteat?: SortOrder
  }

  export type t_categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deleteat?: SortOrder
  }

  export type t_categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type t_categoryCreateNestedOneWithoutSkillsInput = {
    create?: XOR<t_categoryCreateWithoutSkillsInput, t_categoryUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: t_categoryCreateOrConnectWithoutSkillsInput
    connect?: t_categoryWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type t_categoryUpdateOneWithoutSkillsNestedInput = {
    create?: XOR<t_categoryCreateWithoutSkillsInput, t_categoryUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: t_categoryCreateOrConnectWithoutSkillsInput
    upsert?: t_categoryUpsertWithoutSkillsInput
    disconnect?: t_categoryWhereInput | boolean
    delete?: t_categoryWhereInput | boolean
    connect?: t_categoryWhereUniqueInput
    update?: XOR<XOR<t_categoryUpdateToOneWithWhereWithoutSkillsInput, t_categoryUpdateWithoutSkillsInput>, t_categoryUncheckedUpdateWithoutSkillsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type t_learnskillCreateNestedManyWithoutCategoryInput = {
    create?: XOR<t_learnskillCreateWithoutCategoryInput, t_learnskillUncheckedCreateWithoutCategoryInput> | t_learnskillCreateWithoutCategoryInput[] | t_learnskillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: t_learnskillCreateOrConnectWithoutCategoryInput | t_learnskillCreateOrConnectWithoutCategoryInput[]
    createMany?: t_learnskillCreateManyCategoryInputEnvelope
    connect?: t_learnskillWhereUniqueInput | t_learnskillWhereUniqueInput[]
  }

  export type t_learnskillUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<t_learnskillCreateWithoutCategoryInput, t_learnskillUncheckedCreateWithoutCategoryInput> | t_learnskillCreateWithoutCategoryInput[] | t_learnskillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: t_learnskillCreateOrConnectWithoutCategoryInput | t_learnskillCreateOrConnectWithoutCategoryInput[]
    createMany?: t_learnskillCreateManyCategoryInputEnvelope
    connect?: t_learnskillWhereUniqueInput | t_learnskillWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type t_learnskillUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<t_learnskillCreateWithoutCategoryInput, t_learnskillUncheckedCreateWithoutCategoryInput> | t_learnskillCreateWithoutCategoryInput[] | t_learnskillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: t_learnskillCreateOrConnectWithoutCategoryInput | t_learnskillCreateOrConnectWithoutCategoryInput[]
    upsert?: t_learnskillUpsertWithWhereUniqueWithoutCategoryInput | t_learnskillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: t_learnskillCreateManyCategoryInputEnvelope
    set?: t_learnskillWhereUniqueInput | t_learnskillWhereUniqueInput[]
    disconnect?: t_learnskillWhereUniqueInput | t_learnskillWhereUniqueInput[]
    delete?: t_learnskillWhereUniqueInput | t_learnskillWhereUniqueInput[]
    connect?: t_learnskillWhereUniqueInput | t_learnskillWhereUniqueInput[]
    update?: t_learnskillUpdateWithWhereUniqueWithoutCategoryInput | t_learnskillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: t_learnskillUpdateManyWithWhereWithoutCategoryInput | t_learnskillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: t_learnskillScalarWhereInput | t_learnskillScalarWhereInput[]
  }

  export type t_learnskillUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<t_learnskillCreateWithoutCategoryInput, t_learnskillUncheckedCreateWithoutCategoryInput> | t_learnskillCreateWithoutCategoryInput[] | t_learnskillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: t_learnskillCreateOrConnectWithoutCategoryInput | t_learnskillCreateOrConnectWithoutCategoryInput[]
    upsert?: t_learnskillUpsertWithWhereUniqueWithoutCategoryInput | t_learnskillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: t_learnskillCreateManyCategoryInputEnvelope
    set?: t_learnskillWhereUniqueInput | t_learnskillWhereUniqueInput[]
    disconnect?: t_learnskillWhereUniqueInput | t_learnskillWhereUniqueInput[]
    delete?: t_learnskillWhereUniqueInput | t_learnskillWhereUniqueInput[]
    connect?: t_learnskillWhereUniqueInput | t_learnskillWhereUniqueInput[]
    update?: t_learnskillUpdateWithWhereUniqueWithoutCategoryInput | t_learnskillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: t_learnskillUpdateManyWithWhereWithoutCategoryInput | t_learnskillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: t_learnskillScalarWhereInput | t_learnskillScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type t_categoryCreateWithoutSkillsInput = {
    name: string
    deleteat?: Date | string | null
  }

  export type t_categoryUncheckedCreateWithoutSkillsInput = {
    id?: number
    name: string
    deleteat?: Date | string | null
  }

  export type t_categoryCreateOrConnectWithoutSkillsInput = {
    where: t_categoryWhereUniqueInput
    create: XOR<t_categoryCreateWithoutSkillsInput, t_categoryUncheckedCreateWithoutSkillsInput>
  }

  export type t_categoryUpsertWithoutSkillsInput = {
    update: XOR<t_categoryUpdateWithoutSkillsInput, t_categoryUncheckedUpdateWithoutSkillsInput>
    create: XOR<t_categoryCreateWithoutSkillsInput, t_categoryUncheckedCreateWithoutSkillsInput>
    where?: t_categoryWhereInput
  }

  export type t_categoryUpdateToOneWithWhereWithoutSkillsInput = {
    where?: t_categoryWhereInput
    data: XOR<t_categoryUpdateWithoutSkillsInput, t_categoryUncheckedUpdateWithoutSkillsInput>
  }

  export type t_categoryUpdateWithoutSkillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleteat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_categoryUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleteat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_learnskillCreateWithoutCategoryInput = {
    skillname?: string | null
    description?: string | null
    enddate?: Date | string | null
    isfinish?: boolean | null
    deleteat?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type t_learnskillUncheckedCreateWithoutCategoryInput = {
    id?: number
    skillname?: string | null
    description?: string | null
    enddate?: Date | string | null
    isfinish?: boolean | null
    deleteat?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type t_learnskillCreateOrConnectWithoutCategoryInput = {
    where: t_learnskillWhereUniqueInput
    create: XOR<t_learnskillCreateWithoutCategoryInput, t_learnskillUncheckedCreateWithoutCategoryInput>
  }

  export type t_learnskillCreateManyCategoryInputEnvelope = {
    data: t_learnskillCreateManyCategoryInput | t_learnskillCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type t_learnskillUpsertWithWhereUniqueWithoutCategoryInput = {
    where: t_learnskillWhereUniqueInput
    update: XOR<t_learnskillUpdateWithoutCategoryInput, t_learnskillUncheckedUpdateWithoutCategoryInput>
    create: XOR<t_learnskillCreateWithoutCategoryInput, t_learnskillUncheckedCreateWithoutCategoryInput>
  }

  export type t_learnskillUpdateWithWhereUniqueWithoutCategoryInput = {
    where: t_learnskillWhereUniqueInput
    data: XOR<t_learnskillUpdateWithoutCategoryInput, t_learnskillUncheckedUpdateWithoutCategoryInput>
  }

  export type t_learnskillUpdateManyWithWhereWithoutCategoryInput = {
    where: t_learnskillScalarWhereInput
    data: XOR<t_learnskillUpdateManyMutationInput, t_learnskillUncheckedUpdateManyWithoutCategoryInput>
  }

  export type t_learnskillScalarWhereInput = {
    AND?: t_learnskillScalarWhereInput | t_learnskillScalarWhereInput[]
    OR?: t_learnskillScalarWhereInput[]
    NOT?: t_learnskillScalarWhereInput | t_learnskillScalarWhereInput[]
    id?: IntFilter<"t_learnskill"> | number
    skillname?: StringNullableFilter<"t_learnskill"> | string | null
    description?: StringNullableFilter<"t_learnskill"> | string | null
    enddate?: DateTimeNullableFilter<"t_learnskill"> | Date | string | null
    isfinish?: BoolNullableFilter<"t_learnskill"> | boolean | null
    deleteat?: DateTimeNullableFilter<"t_learnskill"> | Date | string | null
    metadata?: JsonNullableFilter<"t_learnskill">
    categoryId?: IntNullableFilter<"t_learnskill"> | number | null
  }

  export type t_learnskillCreateManyCategoryInput = {
    id?: number
    skillname?: string | null
    description?: string | null
    enddate?: Date | string | null
    isfinish?: boolean | null
    deleteat?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type t_learnskillUpdateWithoutCategoryInput = {
    skillname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isfinish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleteat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type t_learnskillUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isfinish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleteat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type t_learnskillUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isfinish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deleteat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}