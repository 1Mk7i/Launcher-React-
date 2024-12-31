async function login(username, password) {
    const mockDatabase = {
      username: 'testUser',
      password: 'testPassword',
    };
    
    if (username === mockDatabase.username && password === mockDatabase.password) {
      return 'Login successful';
    }
    return 'Invalid credentials';
  }
  
  describe('E2E Test: User Login', () => {
    it('should return "Login successful" for correct credentials', async () => {
      const result = await login('testUser', 'testPassword');
      expect(result).toBe('Login successful');
    });
  
    it('should return "Invalid credentials" for incorrect credentials', async () => {
      const result = await login('testUser', 'wrongPassword');
      expect(result).toBe('Invalid credentials');
    });
  });
  