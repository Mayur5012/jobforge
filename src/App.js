import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage, LoginPage, SignUpPage, PricingPage } from './pages';
import { JobsPage } from './components';
import JobDescriptionPage from './pages/JobDescriptionPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import Layout from './layout/Layout';
import ProfileCompletePage from './pages/ProfileCompletePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile-complete" element={<ProfileCompletePage />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/jobs/:jobId" element={<JobDescriptionPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/blog/:blogId" element={<BlogDetailPage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App; 