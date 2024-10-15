import { useState } from 'react';
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  // State for language selection
  const [language, setLanguage] = useState('en'); // Default to English

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Text content based on selected language
  const text = {
    en: {
      company: 'Our Company',
      about: 'About Us',
      portfolio: 'Our Portfolio',
      investor: 'Investor Relations',
      careers: 'Careers',
      more: 'More from Us',
      responsibility: 'Corporate Responsibility',
      developer: 'Developer Portal',
      logistics: 'Logistics',
      newsroom: 'Newsroom',
      language: 'Language',
      follow: 'Follow Us',
      copy: '© Logo 2024. All rights reserved.',
      sitemap: 'Site Map',
      terms: 'Terms of Use',
      privacy: 'Privacy & Security',
      adchoices: 'Ad Choices',
    },
    es: {
      company: 'Nuestra Empresa',
      about: 'Sobre Nosotros',
      portfolio: 'Nuestro Portafolio',
      investor: 'Relaciones con Inversionistas',
      careers: 'Carreras',
      more: 'Más de Nosotros',
      responsibility: 'Responsabilidad Corporativa',
      developer: 'Portal del Desarrollador',
      logistics: 'Logística',
      newsroom: 'Sala de Prensa',
      language: 'Idioma',
      follow: 'Síguenos',
      copy: '© DeliveryApp 2024. Todos los derechos reservados.',
      sitemap: 'Mapa del Sitio',
      terms: 'Términos de Uso',
      privacy: 'Privacidad y Seguridad',
      adchoices: 'Opciones de Anuncios',
    },
    fr: {
      company: 'Notre Entreprise',
      about: 'À Propos de Nous',
      portfolio: 'Notre Portefeuille',
      investor: 'Relations Investisseurs',
      careers: 'Carrières',
      more: 'Plus de Nous',
      responsibility: 'Responsabilité Sociétale',
      developer: 'Portail Développeur',
      logistics: 'Logistique',
      newsroom: 'Salle de Presse',
      language: 'Langue',
      follow: 'Suivez-nous',
      copy: '© DeliveryApp 2024. Tous droits réservés.',
      sitemap: 'Plan du Site',
      terms: 'Conditions d\'Utilisation',
      privacy: 'Confidentialité & Sécurité',
      adchoices: 'Choix Publicitaires',
    },
    de: {
      company: 'Unser Unternehmen',
      about: 'Über Uns',
      portfolio: 'Unser Portfolio',
      investor: 'Investorenbeziehungen',
      careers: 'Karrieren',
      more: 'Mehr von Uns',
      responsibility: 'Soziale Verantwortung',
      developer: 'Entwickler-Portal',
      logistics: 'Logistik',
      newsroom: 'Presse',
      language: 'Sprache',
      follow: 'Folgen Sie uns',
      copy: '© DeliveryApp 2024. Alle Rechte vorbehalten.',
      sitemap: 'Seitenverzeichnis',
      terms: 'Nutzungsbedingungen',
      privacy: 'Datenschutz & Sicherheit',
      adchoices: 'Anzeigenauswahl',
    },
    it: {
      company: 'La Nostra Azienda',
      about: 'Chi Siamo',
      portfolio: 'Il Nostro Portafoglio',
      investor: 'Relazioni con gli Investitori',
      careers: 'Carriere',
      more: 'Più da Noi',
      responsibility: 'Responsabilità Sociale',
      developer: 'Portale Sviluppatori',
      logistics: 'Logistica',
      newsroom: 'Sala Stampa',
      language: 'Lingua',
      follow: 'Seguici',
      copy: '© DeliveryApp 2024. Tutti i diritti riservati.',
      sitemap: 'Mappa del Sito',
      terms: 'Termini di Utilizzo',
      privacy: 'Privacy & Sicurezza',
      adchoices: 'Scelte Pubblicitarie',
    },
    zh: {
      company: '我们的公司',
      about: '关于我们',
      portfolio: '我们的投资组合',
      investor: '投资者关系',
      careers: '职业',
      more: '更多',
      responsibility: '企业社会责任',
      developer: '开发者门户',
      logistics: '物流',
      newsroom: '新闻室',
      language: '语言',
      follow: '关注我们',
      copy: '© 2024 年 DeliveryApp。保留所有权利。',
      sitemap: '网站地图',
      terms: '使用条款',
      privacy: '隐私与安全',
      adchoices: '广告选择',
    },
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto max-w-screen-xl px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-600 pb-8">
          
          {/* Our Company Section */}
          <div className='md:flex-wrap wrap sm:flex-wrap'>
            <h2 className="text-lg font-semibold mb-4">{text[language].company}</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:underline">{text[language].about}</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:underline">{text[language].portfolio}</Link>
              </li>
              <li>
                <Link to="/investor-relations" className="hover:underline">{text[language].investor}</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline">{text[language].careers}</Link>
              </li>
            </ul>
          </div>

          {/* More from Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4">{text[language].more}</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/corporate-responsibility" className="hover:underline">{text[language].responsibility}</Link>
              </li>
              <a href="https://developers.company.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {text[language].developer}
              </a>
              <li>
                <Link to="/logistics" className="hover:underline">{text[language].logistics}</Link>
              </li>
              <li>
                <Link to="/newsroom" className="hover:underline">{text[language].newsroom}</Link>
              </li>
            </ul>
          </div>

          {/* Language Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">{text[language].language}</h2>
            <div className="flex items-center">
              <span className="mr-3">United States</span>
              <select 
                className="bg-gray-700 text-white px-2 py-1 rounded" 
                value={language} 
                onChange={handleLanguageChange}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">{text[language].follow}</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <MdFacebook className="h-6 w-6 hover:text-blue-500 transition duration-300" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="h-6 w-6 hover:text-blue-400 transition duration-300" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <IoLogoInstagram className="h-6 w-6 hover:text-pink-400 transition duration-300" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-6 w-6 hover:text-blue-600 transition duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm">{text[language].copy}</p>
          <div className="flex space-x-4 text-sm">
            <Link to="/site-map" className="hover:underline">{text[language].sitemap}</Link>
            <Link to="/terms" className="hover:underline">{text[language].terms}</Link>
            <Link to="/privacy" className="hover:underline">{text[language].privacy}</Link>
            <Link to="/ad-choices" className="hover:underline">{text[language].adchoices}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
