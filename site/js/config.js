/*
 Licensed to the Apache Software Foundation (ASF) under one or more
 contributor license agreements.  See the NOTICE file distributed with
 this work for additional information regarding copyright ownership.
 The ASF licenses this file to You under the Apache License, Version 2.0
 (the "License"); you may not use this file except in compliance with
 the License.  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

var pm_config = {
    oauth: {
        apache: {
            name: "Apache OAuth",
            oauth_portal: "https://oauth.apache.org/",
            oauth_url: "https://oauth.apache.org/token",
            fullname_key: 'fullname',
            email_key: 'email'
        }
    },
    persona: {
        enabled: true
    }
}


// Localized preferences (defaults)
var prefs = {
    displayMode: 'threaded', // threaded or flat
    groupBy: 'thread', // thread or date
    sortOrder: 'forward', // forward or reverse sort
    compactQuotes: 'yes', // Show quotes from original email as compacted blocks?
    loggedIn: false
}