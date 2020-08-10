import {transform} from "../src/romanizer";
import romanize from "romanize";

describe('romanizer', () => {
    it('should return X when 10', () => {
        const result = romanize(10);

        expect(result).toEqual("X");
    });
});