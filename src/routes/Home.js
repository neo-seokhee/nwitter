import React from 'react';
import { authService } from 'fbase';
import { auth } from 'firebase';

const Home = () => <div>Welcome</div>;

console.log(authService.currentUser);

export default Home;
