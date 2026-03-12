import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Simon Says Game", layout="centered")

st.title("🎮 Simon Says")
st.write("Press any key to start! (Click the game area first to focus)")

# Load your files
def load_game():
    with open("index.html", "r") as f:
        html = f.read()
    with open("style.css", "r") as f:
        css = f.read()
    with open("app.js", "r") as f:
        js = f.read()
        
    # Inject CSS and JS into the HTML
    full_code = f"""
    <style>{css}</style>
    {html}
    <script>{js}</script>
    """
    return full_code

# Render the game in an iframe
game_html = load_game()
components.html(game_html, height=700, scrolling=False)

st.info("Built with HTML/CSS/JS and hosted on Streamlit.")