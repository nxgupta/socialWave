import { Tooltip, Fab, Modal, Box, Typography, Button, Avatar, TextField } from "@mui/material"
import React, { useState } from "react"
import { Add as AddIcon, InsertEmoticon, } from '@mui/icons-material'
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
            <Tooltip title="Delete" sx={{
                position: "fixed",
                bottom: "20px",
                left: { xs: "calc(50% - 25px)", md: "30px" }
            }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Button onClick={() => { setOpen(true) }}>Open modal</Button>
            <Modal
                open={open}
                onClose={() => { setOpen(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: "flex", justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}><Typography variant="h6" color="grey" textAlign="center">Create post</Typography>
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
                    <Stack>
                        <InsertEmoticon/>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}
export default Add