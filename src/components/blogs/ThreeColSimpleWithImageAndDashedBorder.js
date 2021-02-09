import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
// images
import advensure from '../../images/portfolio/advensure.jpg';
import budget from '../../images/portfolio/budget-buddy.jpg';
import social from '../../images/portfolio/keep-austin-social.jpg';
import workout from '../../images/portfolio/workout-buddy.jpg';
import notes from '../../images/portfolio/note.jpg';
import book from '../../images/portfolio/book.jpg';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block my-4 text-sm font-semibold mr-1`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "Blog",
  // heading = <>We Love <span tw="text-primary-500">Writing.</span></>,
  heading = <>Projects</>,
  description = "Some amazing blog posts that are written by even more amazing people.",

}) => {
  const blogPosts = [
    {
      imageSrc:`${advensure}`,
      category: "JavaScript, HTML, Bootstrap, React, MongoDB, Express, Passport, Node",
      title: "Advensure",
      description: "Application designed to simplify and organize travel packing checklists, giving users a simple and dependable resource to plan for upcoming trips, as well as save and use packing lists from trips prior.",
      url: "https://github.com/hallewehmeyer/AdvenSure",
      url2: "https://advensure.herokuapp.com/",
    },
    {
      imageSrc:`${social}`,
      category: "JavaScript, HTML, Bootstrap, MongoDB, Express, Node",
      title: "Keep Austin Social",
      description: "Social Networking application designed for locals over the age of 21 to stay informed and share information about local happy hour specials, events and reviews.",
      url: "https://github.com/hallewehmeyer/KeepAustinSocial",
      url2: "https://github.com/hallewehmeyer/KeepAustinSocial",
    },
    {
      imageSrc:`${budget}`,
      category: "JavaScript, HTML, Bootstrap, MongoDB, Express, Node",
      title: "Budget Buddy",
      description: "Application that helps users monitor and balance finances and track transaction history,  available online or offline.",
      url: "https://github.com/hallewehmeyer/BudgetBuddy",
      url2: "https://budget-buddy-1.herokuapp.com/",
    },
    {
      imageSrc:`${workout}`,
      category: "JavaScript, HTML, Bootstrap, MongoDB, Express, Node",
      title: "Workout Buddy",
      description: "Application designed to help active individuals stay on track with their fitness routine by allowing them to create, track and save workouts.",
      url: "https://github.com/hallewehmeyer/WorkoutBuddy",
      url2: "https://workout-buddy01.herokuapp.com/",
    },
    {
      imageSrc:`${notes}`,
      category: "JavaScript, HTML, Bootstrap, MongoDB, Express, Node",
      title: "Note Taker",
      description: "Application to help users take notes, plan and organize daily schedules and tasks.",
      url: "https://github.com/hallewehmeyer/AwesomeNoteTaker",
      url2: "https://awesome-note-taker001.herokuapp.com/",
    },
    {
      imageSrc:`${book}`,
      category: "React, JavaScript, HTML, Bootstrap, MongoDB",
      title: "BookNook",
      description: "Application for readers to browse new books, read synopses, save to personal lists and keep track of books they have previously read.",
      url: "https://github.com/hallewehmeyer/book-search",
      url2: "https://google-book-og.herokuapp.com/",
    },
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {/* {subheading && <Subheading>{subheading}</Subheading>} */}
          <HeadingTitle>{heading}</HeadingTitle>
          {/* <HeadingDescription>{description}</HeadingDescription> */}
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    {/* <Meta>
                      <UserIcon />
                      <div>{post.author}</div>
                    </Meta> */}
                    <Meta>
                      <TagIcon />
                      <div>{post.category}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Link href={post.url}>Github</Link>
                  <Link href={post.url2}>Website</Link>
                  <Description>{post.description}</Description>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
