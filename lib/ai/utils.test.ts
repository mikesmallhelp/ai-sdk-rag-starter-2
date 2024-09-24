import { generateChunks } from "./utils";

describe("generateChunks", () => {
  it("should split the input into chunks with max 25 characters", () => {
    const input =
      "aaa aaa. aaa aaa. aaa aaa. aaa aaa. aaa aaa. aaa aaa. bbb bbb. bbb bbb. bbb bbb. bbb bbb. bbb bbb. bbb bbb.";
    const maxChunkSize = 25;

    const result = generateChunks(input, maxChunkSize);

    console.log("result:", JSON.stringify(result));

    expect(result).toEqual([
      "aaa aaa. aaa aaa.",
      "aaa aaa. aaa aaa.",
      "aaa aaa. aaa aaa.",
      "bbb bbb. bbb bbb.",
      "bbb bbb. bbb bbb.",
      "bbb bbb. bbb bbb.",
    ]);
  });
});
