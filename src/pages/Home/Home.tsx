import { Box, Typography, Button, Stack } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "background.default",
        color: "text.primary",
        p: 3,
      }}
    >
      <Stack spacing={3} alignItems="center">
        {/* Greeting */}
        <Typography variant="h4" fontWeight="bold">
          Hi, I’m <Typography component="span" color="primary">[Your Name]</Typography> 👋
        </Typography>

        {/* Role Description */}
        <Typography variant="h2" fontWeight="700" lineHeight={1.2}>
          Frontend Developer <br /> Crafting Seamless UIs
        </Typography>

        {/* Short About */}
        <Typography variant="h6" sx={{ maxWidth: "600px" }}>
          I build accessible, performant, and delightful web applications using
          modern tools like <strong>React, TypeScript</strong>, and <strong>Material-UI</strong>.
          I’m passionate about clean code, design systems, and intuitive user experiences.
        </Typography>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={'a'}
            to="/projects"
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            href="/resume.pdf"
            target="_blank"
          >
            Download Resume
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
