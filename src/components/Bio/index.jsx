import React from "react";
import styled from "styled-components";

import {
  FaGithub,
  FaKaggle,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import {
  FaXTwitter,
  FaRegEnvelope,
  FaMedium,
  FaBlogger,
  FaRegFileLines,
  FaLink,
} from "react-icons/fa6";

import { description, author, links } from "../../../blog-config";

const BioWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Profile = styled.img`
  flex: 0 0 auto;
  margin-right: 16px;
  width: 128px;
  height: 128px;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colors.divider};
  object-fit: cover;
  object-position: center 28%;
`;

const Author = styled.div`
  margin-bottom: 4.8px;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

const Description = styled.div`
  margin-bottom: 11.2px;
  line-height: 1.5;
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondaryText};
`;

const LinksWrapper = styled.div`
  & a {
    margin-right: 9.6px;
  }

  & svg {
    width: 25.6px;
    height: 25.6px;
    cursor: pointer;
  }

  & svg path {
    fill: ${(props) => props.theme.colors.icon};
    transition: fill 0.3s;
  }

  & a:hover svg path {
    fill: ${(props) => props.theme.colors.text};
  }
`;

const Link = ({ link, children }) => {
  if (!link) return null;
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

const Bio = () => {
  const {
    github,
    kaggle,
    instagram,
    facebook,
    twitter,
    x,
    blogger,
    medium,
    linkedIn,
    email,
    resume,
    link,
  } = links;

  return (
    <BioWrapper id="bio">
      <Profile src="/profile.png" alt="신재현 프로필 사진" />
      <div>
        <Author>@{author}</Author>
        <Description>{description}</Description>
        <LinksWrapper>
          <Link link={github}>
            <FaGithub />
          </Link>
          <Link link={kaggle}>
            <FaKaggle />
          </Link>
          <Link link={instagram}>
            <FaInstagram />
          </Link>
          <Link link={facebook}>
            <FaFacebook />
          </Link>
          <Link link={twitter}>
            <FaTwitter />
          </Link>
          <Link link={x}>
            <FaXTwitter />
          </Link>
          <Link link={medium}>
            <FaMedium />
          </Link>
          <Link link={blogger}>
            <FaBlogger />
          </Link>
          <Link link={linkedIn}>
            <FaLinkedin />
          </Link>
          <Link link={email}>
            <FaRegEnvelope />
          </Link>
          <Link link={resume}>
            <FaRegFileLines />
          </Link>
          <Link link={link}>
            <FaLink />
          </Link>
        </LinksWrapper>
      </div>
    </BioWrapper>
  );
};

export default Bio;
