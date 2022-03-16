/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
      id
      companyName
      title
      industry
      image
      cellPhone
      primaryLanguage
      zipCode
      avgRating
      aboutMe
      workPhone
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
      id
      companyName
      title
      industry
      image
      cellPhone
      primaryLanguage
      zipCode
      avgRating
      aboutMe
      workPhone
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
      id
      companyName
      title
      industry
      image
      cellPhone
      primaryLanguage
      zipCode
      avgRating
      aboutMe
      workPhone
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
      id
      title
      comment
      starRating
      dateTime
      userID
      customerID
      reviewCatagory
      reviewStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
      id
      title
      comment
      starRating
      dateTime
      userID
      customerID
      reviewCatagory
      reviewStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
      id
      title
      comment
      starRating
      dateTime
      userID
      customerID
      reviewCatagory
      reviewStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
      id
      firstName
      lastName
      email
      Reviews {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      id
      firstName
      lastName
      email
      Reviews {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      id
      firstName
      lastName
      email
      Reviews {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      firstName
      lastName
      email
      Profile {
        id
        companyName
        title
        industry
        image
        cellPhone
        primaryLanguage
        zipCode
        avgRating
        aboutMe
        workPhone
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Reviews {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProfileId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstName
      lastName
      email
      Profile {
        id
        companyName
        title
        industry
        image
        cellPhone
        primaryLanguage
        zipCode
        avgRating
        aboutMe
        workPhone
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Reviews {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProfileId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstName
      lastName
      email
      Profile {
        id
        companyName
        title
        industry
        image
        cellPhone
        primaryLanguage
        zipCode
        avgRating
        aboutMe
        workPhone
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Reviews {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProfileId
    }
  }
`;
