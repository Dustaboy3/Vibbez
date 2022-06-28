import React from "react";
import {
    Flex, Button,
} from "@chakra-ui/react";
import * as Components from "../../../components/Signup-Login/components";
import DefaultAuth from "../../../layouts/auth/Default";
import { FcGoogle } from "react-icons/fc";

function SignIn() {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const [signIn, toggle] = React.useState(true);
    return (
        <DefaultAuth>
            <Flex
                maxW={{ base: "100vw", md: "max-content" }}
                w='100%'
                me='auto'
                h='100%'
                alignItems='start'
                justifyContent='center'
                flexDirection='column'
                vertical-align='middle'
                align='middle'>
                <Flex
                    w='60vw'
                    position='absolute'
                    left='50%'
                    top='50%'
                    transform='translate(-50%, -50%)'>
                    <Components.Container>
                        <Components.SignUpContainer signingIn={signIn}>
                            <Components.Form>
                                <Components.TitleElevated className="titleElevated">Create Account</Components.TitleElevated>
                                <div class="navigation">
                                    <ul>
                                        <li class="icon">
                                            <a>
                                                <span class="icon">
                                                    <Button as={FcGoogle}
                                                        className="Icons"> </Button>
                                                </span>
                                                <span class="text">Facebook</span>
                                            </a>
                                        </li>
                                        <li class="icon">
                                            <a>
                                                <span class="icon">
                                                    <Button as={FcGoogle}
                                                        className="Icons"> </Button>
                                                </span>
                                                <span class="text">Google</span>
                                            </a>
                                        </li>
                                        <li class="icon">
                                            <a>
                                                <span class="icon">
                                                    <Button as={FcGoogle}
                                                        className="Icons"> </Button>
                                                </span>
                                                <span class="text">MetaMask</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <Components.Input type="text" placeholder="Name" />
                                <Components.Input type="email" placeholder="Email" />
                                <Components.Input type="password" placeholder="Password" />
                                <Components.Button>Sign Up</Components.Button>
                            </Components.Form>
                        </Components.SignUpContainer>
                        <Components.SignInContainer signingIn={signIn}>
                            <Components.Form>
                                <Components.TitleElevated>Sign in</Components.TitleElevated>
                                <div class="navigation">
                                    <ul>
                                        <li class="icon">
                                            <a>
                                                <span class="icon">
                                                    <Button as={FcGoogle}
                                                        className="Icons"> </Button>
                                                </span>
                                                <span class="text">Facebook</span>
                                            </a>
                                        </li>
                                        <li class="icon">
                                            <a>
                                                <span class="icon">
                                                    <Button as={FcGoogle}
                                                        className="Icons"> </Button>
                                                </span>
                                                <span class="text">Google</span>
                                            </a>
                                        </li>
                                        <li class="icon">
                                            <a>
                                                <span class="icon">
                                                    <Button as={FcGoogle}
                                                        className="Icons"> </Button>
                                                </span>
                                                <span class="text">MetaMask</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <Components.Input type="email" placeholder="Email" />
                                <Components.Input type="password" placeholder="Password" />
                                <Components.Anchor href="#">Forgot your password?</Components.Anchor>
                                <Components.Button>Sign In</Components.Button>
                            </Components.Form>
                        </Components.SignInContainer>
                        <Components.OverlayContainer signingIn={signIn} >
                            <Components.Overlay signingIn={signIn}>
                                <Components.LeftOverlayPanel signingIn={signIn}>
                                    <Components.Title>Welcome Back!</Components.Title>
                                    <Components.Paragraph>
                                        To keep connected with us please login with your personal info
                                    </Components.Paragraph>
                                    <Components.GhostButton onClick={() => toggle(true)}>
                                        Sign In
                                    </Components.GhostButton>
                                </Components.LeftOverlayPanel>
                                <Components.RightOverlayPanel signingIn={signIn}>
                                    <Components.Title>Hello, Friend!</Components.Title>
                                    <Components.Paragraph>
                                        Enter your personal details and start journey with us
                                    </Components.Paragraph>
                                    <Components.GhostButton onClick={() => toggle(false)}>
                                        Sign Up
                                    </Components.GhostButton>
                                </Components.RightOverlayPanel>
                            </Components.Overlay>
                        </Components.OverlayContainer>
                    </Components.Container>
                </Flex >
            </Flex>
        </DefaultAuth >
    );
}

export default SignIn;
