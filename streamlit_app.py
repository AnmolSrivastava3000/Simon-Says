import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="Simon Says Game", 
    layout="centered",
    initial_sidebar_state="collapsed"
)

st.title("🎮 Simon Says")
st.write("Match the sequence! Works on Desktop & Mobile.")

# Load your files
def load_game():
    # We use 'utf-8' encoding to prevent errors with special characters
    with open("index.html", "r", encoding='utf-8') as f:
        html = f.read()
    with open("style.css", "r", encoding='utf-8') as f:
        css = f.read()
    with open("app.js", "r", encoding='utf-8') as f:
        js = f.read()
        
    # Inject CSS and JS directly into the HTML string
    full_code = f"""
    <style>
    {css}
    </style>
    {html}
    <script>
    {js}
    </script>
    """
    return full_code

game_html = load_game()
components.html(game_html, height=800, scrolling=False)

st.divider()
st.info("Tip: If on mobile, tap the game area to ensure sounds play correctly.")
