LIVE DEMO- https://simon-says-ja8e3xszpgo4ozpmsut36a.streamlit.app/ 

How to Play
Press "Tap to Start" or any key on your keyboard.
Watch the sequence of colors and numbers.
Repeat the sequence by tapping the buttons.
Each level adds one more step to the pattern!

A modern, mobile-friendly version of the classic Simon Says memory game.
My project is built using vanilla JavaScript and styled for a sleek 2x2 grid experience.
It is optimized to be hosted as a Streamlit web application.

Fresh Level Logic: Instead of remembering from level 1, every level generates a brand new sequence. 
it's a pure reaction and short-term memory challenge!

Audio Synthesis: Uses the Web Audio API to generate real-time "beeps" for each button without needing external 
MP3 files.

Responsive Design: A 2x2 grid that automatically scales for Mobile, Tablet, and Desktop views.

Social Sharing: Integrated "Share to X (Twitter)" button to brag about your high score.
i only got to level 10 (haha).

Safety Lock: Input is disabled while the computer is playing the sequence to prevent accidental clicks
(been their/done that).

Tech Stack - 
Frontend: HTML5, CSS3 (Flexbox & Media Queries), JavaScript .
Backend/Hosting: Python & Streamlit (using streamlit.components.v1).
Audio: Web Audio API (Oscillators).

├── index.html       # The game structure (UI)
├── style.css        # Visual styling and responsive grid
├── app.js           # Game logic and audio synthesis
└── streamlit_app.py # Python wrapper for Streamlit deployment // i build it for my learning initially .


How to run locally-
Standard Web Browser
Simply open index.html in any modern web browser (Chrome, Safari, Edge).

Option 2: Streamlit (Local Development)
If you want to test the Streamlit interface locally:

Install Streamlit:
Bash
pip install streamlit
Run the app:
Bash
streamlit run streamlit_app.py

📱 Mobile Gameplay Tips
Focus: Tap the game area once to ensure the browser allows audio to play.
Start: Use the "Tap to Start" button to initialize the game.
Zoom: The app is configured to prevent accidental zooming during rapid tapping.
