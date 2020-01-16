import { Query } from 'react-apollo';
import React from "react";

import { gql } from "apollo-boost";

client
    .query({
        query: gql`
      {
        allConducts {
            id
            description
            title
            order
        }
      }
    `
    })
    .then(result => console.log(result));
