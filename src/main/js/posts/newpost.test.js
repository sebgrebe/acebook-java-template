import React from "react";
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import NewPost from './newpost.js'

describe("NewPost", () => {
  var newPost;

  beforeEach(() => {
    newPost = new NewPost()
  })

  describe("constructing", () => {
    it('works', () => {
      expect(newPost).not.toBe(undefined);
    })
  })

})
