import { Tooltip, Fab, Modal, Box, Typography, Button, Avatar, TextField } from "@mui/material"
import React, { useState } from "react"
import { Add as AddIcon, InsertEmoticon, PersonAdd, VideoCameraBack, Image } from '@mui/icons-material'
import styled from "@emotion/styled"
import { Stack } from "@mui/system"

const UserBox = styled("Box")({
    display: "flex",
    alignItems: "center",
    gap: 10,

})

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip title="Add" sx={{
                position: "fixed",
                bottom: "20px",
                left: { xs: "calc(50% - 25px)", md: "30px" }
            }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon onClick={() =>setOpen(true)}/>
                </Fab>
            </Tooltip>
            <Modal
                open={open}
                onClose={() =>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: "flex", justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}><Typography variant="h6" color="grey" textAlign="center">Create post</Typography>
                    <UserBox>
                        <Avatar src="https://material-ui.com/static/images/avatar/2.jpg" alt="john" />
                        <Typography>John Doe</Typography>
                    </UserBox>
                    <TextField
                        sx={{width:"100%"}}
                        id="standard-multiline-static"
                        multiline
                        placeholder="What's on your mind?"
                        rows={3}
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <InsertEmoticon color="primary"/>
                        <Image color="secondary"/>
                        <VideoCameraBack color="success"/>
                        <PersonAdd color="error"/>
                    </Stack>
                    <Button sx={{display:"flex", justifyContent:"center", alignItems:"center"}} variant="contained">
                        POST
                    </Button>
                </Box>
            </Modal>
        </>
    )
}
export default Add