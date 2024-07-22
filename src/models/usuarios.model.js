export const updateUserPerfil = async (email, userInfo) => {
    try {
      const updates = {};
      // Destructure userInfo object for cleaner syntax
      const { perfil, name, phone, biografia } = userInfo;
  
      // Efficiently add properties to updates object
      for (const key in userInfo) {
        if (userInfo[key]) {
          updates[key] = userInfo[key];
        }
      }
  
      // Handle empty updates 
      if (Object.keys(updates).length === 0) {
        console.log('No profile updates provided.');
        return; // Or return a message indicating no changes
      }
  
      const fieldsToUpdate = Object.keys(updates).map(key => `${key} = ?`).join(', ');
      const valuesToUpdate = Object.values(updates);
      valuesToUpdate.push(email);
  
      await pool.query(`UPDATE usuarios SET ${fieldsToUpdate} WHERE email = ?`, valuesToUpdate);
  
      return true;
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error; // Re-throw the error for handling in the calling code
    }
  };
  