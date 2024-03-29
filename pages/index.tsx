import { useRef, useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Link,
} from '@mui/material';
import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import { SpeakingList, Speaking } from '../components/speakingList';
import { CertificationList, Certification } from '../components/certifications';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  marginBottom: 20,
}));

const HomePage: React.FC = () => {
  const historyRef = useRef<HTMLDivElement>(null);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [isCertificationsLoading, setCertificationIsLoading] = useState(true);
  const [speakingList, setSpeakingList] = useState<Speaking[]>([]);
  const [isSpeakingLoading, setSpeakingIsLoading] = useState(true);
  

  // useEffect(() => {
  //   const fetchCertificationsHistory = async () => {
  //     setCertificationIsLoading(true);
  //     try {
  //       const res = await fetch('/api/certifications');
  //       const data = await res.json();
  //       setCertifications(data);
  //       setCertificationIsLoading(false);
  //     } catch (error) {
  //       setCertificationIsLoading(false);
  //     }
  //   };
  //   fetchCertificationsHistory();
  // }, []);

  useEffect(() => {
    const fetchSpeakingHistory = async () => {
      setSpeakingIsLoading(true);
      try {
        const res = await fetch('/api/speakingHistory');
        const data = await res.json();
        setSpeakingList(data);
        setSpeakingIsLoading(false);
      } catch (error) {
        setSpeakingIsLoading(false);
      }
    };
    fetchSpeakingHistory();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
      <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Profile
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <StyledAvatar
              alt="Profile Image"
              src="panda_iruka_irowake_iruka.png"
            />
          </Grid>
          <Grid item xs={12} sx={{  textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              角田　俊
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontStyle: 'italic', mt: -1 }}>
              Shun Tsunoda
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Software Engineer
            </Typography>
            <Typography variant="body1">
              Software Quality Engineer / Software Developer / Quality Assurance
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{  textAlign: 'center' }}>
            {/* <Typography variant="subtitle2">
              <Link href="mailto:aaaa@example.com">aaaa@example.com</Link>
            </Typography> */}
            <Typography variant="subtitle1">
              Affiliation: 
              <Link href="https://jstqb.jp/" target="_blank" rel="noopener noreferrer">
              JSTQB
              </Link>
              {' '}/{' '}
              <Link href="https://naite.swquality.jp/" target="_blank" rel="noopener noreferrer">
              NaITE
              </Link>
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Past affiliation: 
              <Link href="https://wacate.jp/" target="_blank" rel="noopener noreferrer">
              WACATE
              </Link>
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link href="https://twitter.com/imtnd" target="_blank" rel="noopener noreferrer">
                Twitter
              </Link>{' '}
              |{' '}
              <Link href="https://github.com/imtnd" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>{' '}
              |{' '}
              <Link href="https://www.linkedin.com/in/shun-tsunoda-141204112/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>{' '}
              |{' '}
              <Link href="https://imtnd.hatenablog.com/" target="_blank" rel="noopener noreferrer">
                Hatena Blog
              </Link>{' '}
              |{' '}
              <Link href="https://speakerdeck.com/imtnd" target="_blank" rel="noopener noreferrer">
                Speaker Deck
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{  textAlign: 'center' }}>
            <Typography variant="subtitle1" gutterBottom>
              &#x2709;&#xFE0F;
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScAVxTtlOvDgYKvJQnEpQv6SuuJnhzN8Ke3FfwSS8JuloMUCg/viewform" target="_blank" rel="noopener noreferrer">Contact Me</Link>
              &#x2709;&#xFE0F;
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* <Box ref={historyRef} sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Certifications
        </Typography>
        <div>
          {isCertificationsLoading ? (
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '20vh'}}>
             <CircularProgress />
           </div>
          ) : (
            <CertificationList certifications={certifications} />
          )}
        </div>
      </Box> */}
      <Box ref={historyRef} sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" >
          Speaking History
        </Typography>
        <div>
          {isSpeakingLoading ? (
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '20vh'}}>
             <CircularProgress />
           </div>
          ) : (
            <SpeakingList speakingList={speakingList} />
          )}
        </div>
      </Box>
    </Container>
  );
}

export default HomePage;
