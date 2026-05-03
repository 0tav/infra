import { prisma } from "@/lib/dbConn.js";
import { createCategory, validateEntry, type categoryInput } from "@/services/categoryServices.js";
import { describe, expect, it, vi } from "vitest";

vi.mock('@/lib/dbConn', () => ({
    prisma: {
        t_category: {
            create: vi.fn()
        }
    }
}));

describe('Category Service - validateEntry', () => {
    it('PASS: Must success and trimmed if valid data is inputed', () => {
        const input : categoryInput = {
            name: "  Backend Development ",
            skills: [
                {
                    skillname: " Node.js  ",
                    description: "Runtime Javascript",
                    metadata: { level: "Senior" }
                }
            ]
        };

        const result = validateEntry(input);

        expect(result.name).toBe("Backend Development");
        expect(result.skills[0]?.skillname).toBe("Node.js");
        expect(result.skills[0]?.isfinish).toBe(false);
    });

    it('PASS: Must send empty object if metadata not inputed', () => {
        const input : categoryInput = {
        name: "Database",
        skills: [{ skillname: "PostgreSQL" }]
        };

        const result = validateEntry(input);
        expect(result.skills[0]?.metadata).toEqual({});
    });

    it('FAIL: Must error if skillname is too short', () => {
        const badSkillName = "Hi";
        const input: categoryInput = { 
            name: "Cloud Computing",
            skills: [
                { skillname: "Docker" },
                { skillname: badSkillName } // Error di sini
            ]
        };
        expect(() => validateEntry(input)).toThrow(`Skill name "${badSkillName}" is too short`);
    });

});

describe('Category Service - createCategory (Mocking)', () => {
    it('PASS: Must calling prisma.create function correctly', async () => {
        const mockData : categoryInput = {
            name: "DevOps",
            skills: [{ skillname: "Kubernetes" }]
        };

        const mockRes = { id: 99, name: "DevOps" };
        (prisma.t_category.create as any).mockResolvedValue(mockRes);

        const result = await createCategory(mockData);

        expect(prisma.t_category.create).toHaveBeenCalled();

        expect(result.id).toBe(99);
        expect(result.name).toBe("DevOps");
    });
});