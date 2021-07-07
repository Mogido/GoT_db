import React from 'react';
import styled from 'styled-components';

const ErrorImage = styled.img`
display: block;
width: 100px;
margin: 0 auto;
`;

const ErrorText = styled.span`
width: 100%;
text-align: center;
color: red;
display: block;
`

const ErrorMessage = () => {

	return (
		<>
			<ErrorImage src={process.env.PUBLIC_URL + '/img/error.png'} alt='error'></ErrorImage>
			<ErrorText>Something goes wrong!</ErrorText>
		</>
		)
}

export default ErrorMessage;