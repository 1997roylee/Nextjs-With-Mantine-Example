import { Container } from "@mantine/core";
import Head from "next/head";
import { CustomButton } from "../components/Customize";
import { Feature } from "../components/Feature";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Container>
        <Feature />
      </Container>
      <Container>
        <CustomButton theme={{
          main: "red",
          border: "red",
        }}>
          Example Button 01
        </CustomButton>
        <CustomButton theme={{
          main: "blue",
          border: "blue",
        }}>
          Example Button 02
        </CustomButton>
      </Container>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
