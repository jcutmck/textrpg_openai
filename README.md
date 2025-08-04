# JSON to CSV Converter

This is a prototype project to practice integration and feasibility of a user-facing javascript text-based RPG game where the web app utilizes the OpenAI API to respond in near real-time to the user's inputs. In theory, this creates a unique, dynamic adventure game for each user, each time they play. There are obvious concerns with this infrastructure due to stacking requests throughout the game and the subsequent cost for AI usage over time, but the foundation is simple and good for demonstrating the ease of creation of such apps.

## Features

- User input for response to the game dialog.

- Direct calls to OpenAI's API (ChatGPT) for dynamic responses to user/player.

- Simple, clean user interface with lightweight Javascript/CSS design.

## Tech Stack

- **Frontend:** Javascript, CSS

- **Backend:** OpenAI API

## How to Run Locally

1. **Obtain OpenAI API Key:**

   Requires an OpenAI API Key/Secret, which you would have to obtain and purchase hours for to utilize the requests/response by AI. You can read more about that here [https://platform.openai.com/](https://platform.openai.com/)

2. **Clone the repository:**

    ```bash
    git clone [https://github.com/jcutmck/cal_time-alyzer/tree/main](https://github.com/jcutmck/cal_time-alyzer/tree/main)
    ```

3. **Start the frontend:**
    Start the localhost front-end to test the game with requests made to the OpenAI APIs.
