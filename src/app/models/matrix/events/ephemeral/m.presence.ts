/*
 *     Evelium - A matrix client
 *     Copyright (C)  2018 Travis Ralston
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { EphemeralEvent } from "./ephemeral-event";

export interface PresenceEvent extends EphemeralEvent {
    type: "m.presence";
    sender: string; // user ID
    content: {
        // Note: In practice these are never seen
        avatar_url?: string; // mxc
        displayname?: string; // lack of casing is a spec thing

        currently_active?: boolean;
        last_active_ago: number; // ms
        presence: "online" | "unavailable" | "offline";
    };
}