import Link from 'next/link';

import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

function AboutUsPage() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ mt: 4 }}>
            FirstApp is a family-owned business founded by four sisters who share a passion for technology and innovation. With diverse backgrounds in software engineering, graphic design, and business management, they came together to create an app development company focused on creating user-friendly and visually stunning applications. Each sister brings unique skills to the team, allowing FirstApp to provide a comprehensive and personalized approach to app development. 
            </Typography>
            <Typography variant="body1" sx={{ mt: 4 }}>
            Together, they strive to create cutting-edge solutions for their clients, while also maintaining a strong commitment to customer satisfaction and quality.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="/about-us-image.jpg" alt="About Us" style={{ maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AboutUsPage;