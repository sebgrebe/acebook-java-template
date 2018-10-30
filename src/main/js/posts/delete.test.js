import React from "react";
import PostsBuilder from './PostsBuilder';

describe("when setting up testing", () => {
  it("should fail", () => {
    expect(1 + 1).toBe(2);
  });
});


describe("Testing delete", () => {

  // beforeAll(() => {
  //   const testBuilder = new PostsBuilder();
  //   testBuilder.state.push("string")
  //   console.log(testBuilder.state)
  // });

  it("should delete post with delete", () => {
    const testBuilder = new PostsBuilder();
    testBuilder.state = { posts: "string"}
    const deleteComp = new Delete();
    deleteComp.delete(mockAxios)

    console.log(testBuilder.state)
    expect(testBuilder.state).toBe(undefined)
    // expect mockAxios to be called with Delete Request
  });
});
// function Delete(delete)
