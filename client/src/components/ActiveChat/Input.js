import React, { useState } from "react";
import {
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import { InsertPhoto } from "@material-ui/icons";
import { ImageUploadDialog } from "./ImageUploadDialog";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
  image: {
    width: "56px",
    height: "56px",
  },
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: images,
    };
    await postMessage(reqBody);
    setText("");
    setImages([]);
  };

  const toggleUploadImageDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleImageMessage = (imageUrl) => {
    const newImages = [...images, imageUrl];
    setImages(newImages);
  };

  const deleteImage = (id) => {
    const newImages = images.filter((_, index) => {
      return id !== index;
    });
    setImages(newImages);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              {images &&
                images.map((image, idx) => {
                  return (
                    <Avatar
                      alt="Image Message"
                      src={image}
                      key={idx}
                      onClick={() => deleteImage(idx)}
                      className={classes.image}
                    />
                  );
                })}
              <IconButton onClick={() => setOpenDialog(!openDialog)}>
                <InsertPhoto />
              </IconButton>
              <ImageUploadDialog
                open={openDialog}
                dialogControl={toggleUploadImageDialog}
                imageSubmit={handleImageMessage}
              />
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
