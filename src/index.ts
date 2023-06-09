/*
	Alex Skunk, a discord bot.
	Copyright (C) 2023 RobotoSkunk <contact@robotoskunk.com>

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published
	by the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import 'source-map-support/register';
import './env';

import client from './client';
import Database from './database/connection';


(async () => {
	client.database = new Database();
	await client.database.testConnection();


	// Load events
	await import('./events/interactionCreate');

	// Load commands
	await import('./commands');


	// Login
	await client.login(process.env.TOKEN);
	console.log('Logged in.');
})();
