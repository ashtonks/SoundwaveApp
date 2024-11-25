import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import React, { useState } from "react";

const Library = () => {
  const [playlists, setPlaylists] = useState([]); // To store playlists
  const [newPlaylistName, setNewPlaylistName] = useState(""); // For new playlist name input
  const [selectedPlaylist, setSelectedPlaylist] = useState(null); // Currently selected playlist
  const [newSong, setNewSong] = useState(""); // For new song input
  const [modalVisible, setModalVisible] = useState(false); // For adding songs to playlist
  const [deleteModalVisible, setDeleteModalVisible] = useState(false); // For deleting playlist confirmation
  const [playlistToDelete, setPlaylistToDelete] = useState(null); // To store playlist to be deleted

  // Add a new playlist
  const handleAddPlaylist = () => {
    if (newPlaylistName.trim()) {
      setPlaylists([...playlists, { name: newPlaylistName, songs: [] }]);
      setNewPlaylistName(""); // Clear the input field
    }
  };

  // Add a song to the selected playlist
  const handleAddSong = () => {
    if (newSong.trim() && selectedPlaylist !== null) {
      const updatedPlaylists = [...playlists];
      updatedPlaylists[selectedPlaylist].songs.push(newSong);
      setPlaylists(updatedPlaylists);
      setNewSong(""); // Clear the song input
      setModalVisible(false); // Close the modal
    }
  };

  // Delete a playlist
  const handleDeletePlaylist = () => {
    if (playlistToDelete !== null) {
      const updatedPlaylists = playlists.filter(
        (_, i) => i !== playlistToDelete
      );
      setPlaylists(updatedPlaylists); // Remove the playlist from state
      setDeleteModalVisible(false); // Close the confirmation modal
    }
  };

  // Render each playlist item
  const renderPlaylistItem = ({ item, index }) => (
    <View style={styles.playlistItem}>
      <TouchableOpacity onPress={() => setSelectedPlaylist(index)}>
        <Text style={styles.playlistName}>{item.name}</Text>
      </TouchableOpacity>
      {item.songs.length > 0 && (
        <Text style={styles.songsText}>Songs: {item.songs.join(", ")}</Text>
      )}
      <TouchableOpacity
        onPress={() => {
          setSelectedPlaylist(index);
          setModalVisible(true);
        }}
        style={styles.addSongButton}
      >
        <Text style={styles.buttonText}>Add Song</Text>
      </TouchableOpacity>
      {/* Add Delete Button */}
      <TouchableOpacity
        onPress={() => {
          setPlaylistToDelete(index); // Set the playlist to be deleted
          setDeleteModalVisible(true); // Show the confirmation modal
        }}
        style={styles.deleteButton}
      >
        <Text style={styles.buttonText}>Delete Playlist</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Library</Text>

      {/* Create New Playlist */}
      <View style={styles.card}>
        <TextInput
          style={styles.textInput}
          placeholder="New Playlist Name"
          placeholderTextColor="#aaa"
          value={newPlaylistName}
          onChangeText={setNewPlaylistName}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddPlaylist}>
          <Text style={styles.buttonText}>Create Playlist</Text>
        </TouchableOpacity>
      </View>

      {/* Display Playlist */}
      <FlatList
        data={playlists}
        renderItem={renderPlaylistItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.playlistList}
      />

      {/* Modal to Add Song to Playlist */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.textInput}
              placeholder="Song Name"
              placeholderTextColor="#aaa"
              value={newSong}
              onChangeText={setNewSong}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddSong}>
              <Text style={styles.buttonText}>Add Song</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal for Delete Confirmation */}
      <Modal
        visible={deleteModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.confirmText}>
              Are you sure you want to delete this playlist?
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                onPress={handleDeletePlaylist}
                style={styles.buttonDelete}
              >
                <Text style={styles.buttonText}>Yes, Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setDeleteModalVisible(false)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#141414",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    padding: 30,
  },
  card: {
    width: "90%",
    backgroundColor: "#505050",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    justifyContent: "center",
  },
  textInput: {
    height: 50,
    width: "100%",
    backgroundColor: "#353535",
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#7700FF",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonDelete: {
    backgroundColor: "#FF0000",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  playlistList: {
    width: "90%",
  },
  playlistItem: {
    backgroundColor: "#505050",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: "100%",
  },
  playlistName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  songsText: {
    color: "#aaa",
    marginTop: 5,
  },
  addSongButton: {
    marginTop: 10,
    backgroundColor: "#7700FF",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: "#FF0000",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#505050",
    padding: 30,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  confirmText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
});
