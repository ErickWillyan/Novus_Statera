import React, { useState } from 'react';
import ProfileScreenDoador from './ProfileScreenDoador';
import ProfileScreenDoadorEdit from './ProfileScreenDoadorEdit';

const ProfileScreen = ({navigation}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditPress = () => {
    setIsEditing(true);
  };

  return (
    <>
      {isEditing ? (
        <ProfileScreenDoadorEdit onCancelEdit={() => setIsEditing(false)} navigation={navigation} />
      ) : (
        <ProfileScreenDoador navigation={navigation} onEditPress={handleEditPress} />
      )}
    </>
  );
};

export default ProfileScreen;