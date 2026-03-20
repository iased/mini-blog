<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name'     => 'Alice',
            'email'    => 'alice@example.com',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name'     => 'Bob',
            'email'    => 'bob@example.com',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name'     => 'Stella',
            'email'    => 'stella@example.com',
            'password' => Hash::make('password'),
        ]);
    }
}
