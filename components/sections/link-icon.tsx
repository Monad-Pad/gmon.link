import * as Si from '@icons-pack/react-simple-icons';
import { Link } from 'lucide-react';

interface Props {
  url: string;
  size?: string | number;
}

export default function LinkIcon({ url, size }: Props) {
  const matchedKey = Object.keys(iconMap).find(key =>
    iconMap[key].urls.some(link => url.includes(link))
  );

  const Icon = matchedKey ? iconMap[matchedKey].Icon : Link;
  
  return <Icon size={size} />;
}

interface IconMapEntry {
  urls: string[]; 
  Icon: Si.IconType;
}

const iconMap: Record<string, IconMapEntry> = {
  appleMusic: {
    urls: ['music.apple.com'],
    Icon: Si.SiApplemusic,
  },
  bitbucket: {
    urls: ['bitbucket.org'],
    Icon: Si.SiBitbucket,
  },
  cashApp: {
    urls: ['cash.app'],
    Icon: Si.SiCashapp,
  },
  discord: {
    urls: ['discord.gg'],
    Icon: Si.SiDiscord,
  },
  facebook: {
    urls: ['facebook.com', 'fb.me', 'fb.watch'],
    Icon: Si.SiFacebook,
  },
  github: {
    urls: ['github.com', 'gh.io'],
    Icon: Si.SiGithub,
  },
  gitlab: {
    urls: ['gitlab.com'],
    Icon: Si.SiGitlab,
  },
  instagram: {
    urls: ['instagram.com', 'instagr.am'],
    Icon: Si.SiInstagram,
  },
  linkedin: {
    urls: ['linkedin.com', 'lnkd.in'],
    Icon: Si.SiLinkedin,
  },
  medium: {
    urls: ['medium.com'],
    Icon: Si.SiMedium,
  },
  paypal: {
    urls: ['paypal.com', 'paypal.me'],
    Icon: Si.SiPaypal,
  },
  pinterest: {
    urls: ['pinterest.com', 'pin.it'],
    Icon: Si.SiPinterest,
  },
  reddit: {
    urls: ['reddit.com', 'redd.it'],
    Icon: Si.SiReddit,
  },
  spotify: {
    urls: ['spotify.com'],
    Icon: Si.SiSpotify,
  },
  snapchat: {
    urls: ['snapchat.com'],
    Icon: Si.SiSnapchat,
  },
  telegram: {
    urls: ['t.me'],
    Icon: Si.SiTelegram,
  },
  tiktok: {
    urls: ['tiktok.com'],
    Icon: Si.SiTiktok,
  },
  twitter: {
    urls: ['twitter.com', 'x.com', 't.co'],
    Icon: Si.SiX,
  },
  twitch: {
    urls: ['twitch.tv'],
    Icon: Si.SiTwitch,
  },
  venmo: {
    urls: ['venmo.com'],
    Icon: Si.SiVenmo,
  },
  whatsapp: {
    urls: ['wa.me'],
    Icon: Si.SiWhatsapp,
  },
  wordpress: {
    urls: ['wordpress.com'],
    Icon: Si.SiWordpress,
  },
  youtube: {
    urls: ['youtube.com', 'youtu.be'],
    Icon: Si.SiYoutube,
  },
  zoom: {
    urls: ['zoom.us'],
    Icon: Si.SiZoom,
  },
};