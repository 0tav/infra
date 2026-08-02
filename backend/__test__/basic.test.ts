import { describe, it, expect } from "vitest";
import { isDataValid } from "../src/utils/validator.js";


describe('Validator test', () => {
    it('Must return false if data is empty', () => {
        expect(isDataValid("")).toBe(false);
    });

    it('Must return true if data not empty', () => {
        expect(isDataValid('Hello my friend')).toBe(true);
    });
});