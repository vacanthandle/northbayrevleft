:root {
    --cream-base: #FFFAE3;      /* primary page background / lightest field */
    --card: #F3E9C7;            /* slightly deeper cream, for panels on the oxblood field */
    --ink: #1C1810;             /* text on light fields */
    --bloodred-bg: #6E1F27;
    --bloodred-fg: #F5D9DB;
    --pine: #1F3B2C;
    --charcoal: #2A2420;
    --charcoal-text: #E8E0D5;
    --charcoal-muted: #B3A99B;
    --rust: #963C24;
    --rust-text: #F3D6C8;
    --ochre-bg: #A6751A;
    --ochre-fg: #3A2A08;
 }

 * { box-sizing: border-box; }

html, body {
    height: 100%; /* needed so 100vh below has something solid to base off */
}

body {
    margin: 0;
    min-height: 100vh; /* page is always at least full viewport height */
    display: flex;
    flex-direction: column; /* nav, hero, footer stack top to bottom */
    background: var(--oxblood);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    color: var(--ink);
}

section {
  padding: 100px 0;
}

.content-wrap {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 768px) {
  section { padding: 50px 0; }
}
