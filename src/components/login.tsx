import React from 'react';
import Styled from 'styled-components/macro'
import { Container, Section, ImageSection, SubmitButton, FormCol } from './styles';
import TextField from '@material-ui/core/TextField';

export const SignUp = () => <Container>
    <ImageSection />
    <Section>

        <FormCol onSubmit={() => { }}>
            <h2>Welcome to our community</h2>
            <h3>Lets create an account</h3>


            <TextField id="e-mai" label="User Name" />
            <TextField id="e-mai" label="E-mail address" />
            <TextField id="password" label="Password" />
            <TextField id="password" label="confirm Password" />
            <SubmitButton type='submit'>Sing Up</SubmitButton>
            <p className='message'>Already have an account? <span className='link'>Log in</span> </p>

        </FormCol>
    </Section>
</Container>