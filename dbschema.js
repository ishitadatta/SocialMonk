let db = {
    users: [  
      {  
        userId: 'JkrwARQD4T04tc3YOn6c',  
        email: 'user@email.com',  
        handle: 'user',  
        createdAt: 'June 17, 2020 at 12:00:00 AM UTC+5:30',  
        imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',  
        bio: 'Hello, my name is user, nice to meet you',  
        website: 'https://user.com',  
        location: 'Bangalore, India'  
      }  
    ],  
    screams: [  
      {  
        userHandle: 'user',  
        body: 'This is a sample scream',  
        createdAt: '2019-03-15T10:59:52.798Z',  
        likeCount: 5,  
        commentCount: 3  
      }  
    ],  
    comments: [  
      {  
        userHandle: 'user',  
        screamId: '5choG4ecMuxKNW51U0hX',  
        body: 'nice one monk!',  
        createdAt: 'June 17, 2020 at 1:00:00 AM UTC+5:30'  
      }  
    ],  
    notifications: [  
      {  
        recipient: 'user',  
        sender: 'john',  
        read: 'true | false',  
        screamId: '5choG4ecMuxKNW51U0hX',  
        type: 'like | comment',  
        createdAt: 'June 17, 2020 at 1:00:00 AM UTC+5:30'  
      }  
    ]  
  };
  const userDetails = {  
    // Redux data  
    credentials: {  
      userId: 'JkrwARQD4T04tc3YOn6c',  
      email: 'user@email.com',  
      handle: 'user',  
      createdAt: 'June 17, 2020 at 1:00:00 AM UTC+5:30',  
      imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',  
      bio: 'Hello, my name is user, nice to meet you',  
      website: 'https://user.com',
      location: 'Bangalore, India'  
    },  
    likes: [  
      {  
        userHandle: 'user',  
        screamId: 'XDkXapWLpUPaV4aLhadP'  
      },  
      {  
        userHandle: 'user',  
        screamId: '5choG4ecMuxKNW51U0hX'  
      }  
    ]  
  };