import styled from 'styled-components';

import { Form } from 'formik';

export const StyledForm = styled(Form)`
  width: 380px;
  min-height: 90px;
  border: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[3]}px;
  display: flex;
  flex-direction: column;
`;
