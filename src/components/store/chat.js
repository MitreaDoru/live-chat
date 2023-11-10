import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    secondUser: '',
    name: '',
    user: '',
    agenda: [],
    filteredAgenda: [],
    filteredAgendaNotFound: '',
    displayedChat: '',
    isSearching: false,
    message: '',
    conversations: [],
    createGroup: false,
    groupUsers: [],
    leaveButton: false,
    showInput: false,
    error: '',
    showRight: false,
    windowWidth: '',
    image: '',
    groupName: '',
    groupImageIsSelected: false,
    showGroupNameInput: false,
    groupImage: ''
};

const chatSlice = createSlice({
    name: "conversation",
    initialState: initialState,
    reducers: {
        name(state, action) {
            state.name = action.payload;
        },
        user(state, action) {
            state.user = action.payload;
        },
        userAgenda(state, action) {
            state.agenda = action.payload;
        },
        secondUser(state, action) {
            state.secondUser = action.payload;
        },
        isSearching(state, action) {
            state.isSearching = action.payload;
        },
        filteredAgenda(state, action) {
            state.filteredConvo = action.payload;
        },
        filteredAgendaNotFound(state, action) {
            state.filteredAgendaNotFound = action.payload;
        },
        displayedChat(state, action) {
            state.displayedChat = action.payload;

        },
        getMessage(state, action) {
            state.message = action.payload;
        },
        getConversations(state, action) {
            state.conversations = action.payload;
        },
        createGroup(state, action) {
            state.createGroup = action.payload;
        },
        groupName(state, action) {
            state.groupName = action.payload;
        },
        groupUsers(state, action) {
            if (action.payload.length >= 2) {
                state.groupUsers = action.payload;
            } else {
                if (action.payload === false) {
                    state.groupUsers = [];
                } else {
                    const user = state.groupUsers.find(user => user.userId === action.payload.userId);
                    if (!user) {
                        state.groupUsers.push(action.payload);
                    } else {
                        state.groupUsers = state.groupUsers.filter(user => user.userId !== action.payload.userId);
                    }
                }
            }
        },
        updateConversations(state, action) {
            if (action.payload.conversation) {
                const conversationIndex = state.conversations.findIndex(conversation => conversation._id === action.payload.conversation._id)
                state.conversations[conversationIndex] = action.payload.conversation
            } else {
                state.conversations = state.conversations.filter(conv => conv._id !== action.payload._id);
                state.conversations = [action.payload, ...state.conversations];
            }
        },
        leaveConversation(state, action) {
            state.conversations = state.conversations.filter(conversation => conversation._id !== action.payload._id);
        },
        leaveButton(state, action) {
            state.leaveButton = action.payload;
        },
        showInput(state, action) {
            state.showInput = action.payload;
        },
        updateMessages(state, action) {
            state.displayedChat.messages = action.payload;
        },
        error(state, action) {
            state.error = action.payload;
        },
        showRight(state, action) {
            state.showRight = action.payload
        },
        windowWidth(state, action) {
            state.windowWidth = action.payload
        },
        personalImage(state, action) {
            state.image = action.payload
        },
        groupImage(state, action) {
            state.groupImage = action.payload
        },
        groupImageIsSelected(state, action) {
            state.groupImageIsSelected = action.payload
        },
        showGroupNameInput(state, action) {
            state.showGroupNameInput = action.payload
        }



    },
});
export const chatAction = chatSlice.actions;
export default chatSlice.reducer;