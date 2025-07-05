import GithubIcon from '@/ui/icons/social-media/github';
import InstagramIcon from '@/ui/icons/social-media/instagram';
import LinkedInIcon from '@/ui/icons/social-media/linkedin';
import StravaIcon from '@/ui/icons/social-media/strava';
import Link from 'next/link';

const socialMedia = [
  {
    icon: <GithubIcon />,
    link: 'https://github.com/Raafina',
  },
  {
    icon: <InstagramIcon />,
    link: 'https://www.instagram.com/raafi.na/',
  },
  {
    icon: <LinkedInIcon />,
    link: 'https://www.linkedin.com/in/raafi-na',
  },
  {
    icon: <StravaIcon />,
    link: 'https://strava.app.link/27gtrruHEQb',
  },
];

export default function TechStack() {
  return (
    <footer className="pt-6 pb-2  dark:bg-dark lg:h-fit flex items-center ">
      <div className="container">
        <div className="flex justify-center">
          {socialMedia.map((media) => (
            <Link
              href={media.link}
              target="_blank"
              className="w-9 h-9 p-1 mr-3 border-2 border-secondary flex justify-center items-center rounded-full hover:bg-primary hover:border-primary text-secondary dark:text-secondary hover:text-white hover:dark:text-dark">
              {media.icon}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <p className="text-secondary text-center mt-2">
            Copyright &copy;2025 Raafi Nur Adzani
          </p>
        </div>
      </div>
    </footer>
  );
}
