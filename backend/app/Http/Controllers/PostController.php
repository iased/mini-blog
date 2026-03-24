<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return Post::with('user')->latest()->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'message' => 'required'
        ]);

        $post = Post::create([
            'title'   => $request->title,
            'message' => $request->message,
            'user_id' => auth()->id(),
        ]);

        return response()->json($post, 201);
    }

    public function show(Post $post)
    {
        return $post->load('user');
    }

    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required',
            'message' => 'required'
        ]);
        $post->update($request->all());
        return $post->load('user');
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json(['message' => 'Post deleted']);
    }

    public function myPosts(Request $request)
    {
        return Post::with('user')
            ->where('user_id', $request->user()->id)
            ->latest()
            ->get();
    }
}
