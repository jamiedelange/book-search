import gql from 'graphql-tag';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;