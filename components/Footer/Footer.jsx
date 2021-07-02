import { AiFillGithub } from "react-icons/ai";
import { FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    let socialIcons = [
        {
            icon: <AiFillGithub />,
            styl: "footer__social-github",
            link: `https://github.com/Olaleye-Blessing`,
        },
        {
            icon: <FiTwitter />,
            styl: "footer__social-twitter",
            link: `https://twitter.com/OlaleyeBlessin7`,
        },
        {
            icon: <FiLinkedin />,
            styl: "footer__social-linkedin",
            link: `https://www.linkedin.com/in/blessing-olaleye-139a22204/`,
        },
    ];
    return (
        <footer className="width">
            <div>&copy; Olaleye Blessing</div>
            <div className="footer__social">
                {socialIcons.map((social, i) => (
                    <a
                        key={i}
                        href={social.link}
                        className={`${social.styl} btn`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <figure>{social.icon}</figure>
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
