<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\User;

class PostSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::all();

        if ($users->isEmpty()) {
            $this->command->info('No users found. Run UserSeeder first.');
            return;
        }

        Post::create([
            'title' => 'A Sunny Morning',
            'message' => 'Woke up to the sound of birds singing and sunlight streaming through the window. Some mornings just feel magical.',
            'user_id' => $users->random()->id
        ]);

        Post::create([
            'title' => 'City Walks',
            'message' => 'Exploring the city on foot always reveals little hidden corners, cozy cafés, and street art you would never notice otherwise.',
            'user_id' => $users->random()->id
        ]);

        Post::create([
            'title' => 'A Good Book',
            'message' => 'Finished a book today that completely transported me to another world. There’s nothing like getting lost in a story.',
            'user_id' => $users->random()->id
        ]);

        Post::create([
            'title' => 'Coffee & Reflection',
            'message' => 'Sipping coffee while watching the rain outside, thinking about life’s small joys. Sometimes you just need a quiet moment.',
            'user_id' => $users->random()->id
        ]);

        Post::create([
            'title' => 'Evening Stroll',
            'message' => 'The streets are calm and quiet as the sun sets. Evening walks always feel like a reset button for the mind.',
            'user_id' => $users->random()->id
        ]);

        Post::create([
            'title' => 'Weekend Vibes',
            'message' => 'Lazy weekends are underrated. Taking the time to relax, read, and enjoy simple pleasures feels like a mini vacation.',
            'user_id' => $users->random()->id
        ]);
    }
}
