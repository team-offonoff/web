import { styled } from 'styled-components';

export const TopicCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TopicCommentsHeader = styled.div`
  padding: 20px;
`;

export const CommentsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const CommentInputContainer = styled.div`
  width: 100%;
  padding: 10px 20px 32px;
  border-top: 1px solid #e6e6e6;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 8px 15px;
  background-color: #e6e6e6;
  border: none;
  border-radius: 10px;
  outline: none;
`;
