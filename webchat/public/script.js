const socket = io('/')
const peer = new Peer(undefined, {host:'peerjs-server.herokuapp.com', secure:true, port:443})
const peers = {}

const video_grid = document.getElementById('video-grid')
const my_video = document.createElement('video')
my_video.muted = true;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    add_video_stream(my_video, stream)

    peer.on('call', call => {
        call.answer(stream)
        const video = document.createElement('video')
        call.on('stream', user_video_stream => {
            try{
                add_video_stream(video, user_video_stream)
            } catch(error) {
                console.error(error)
            }


        })
    })

    socket.on('user-connected', userId => {
        setTimeout(connect_new_user, 1000, userId, stream)
        console.log('User connected: ', userId)
    })
})

socket.on('user-disconnected', userId => {
    if (peers[userId]) {
        peers[userId].close();
        console.log('User disconnected: ', userId)
    }
})

peer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id)
})

function add_video_stream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play()
    })
    video_grid.append(video)
}

function connect_new_user(userId, stream) {
  const call = peer.call(userId, stream)
  const video = document.createElement('video')
  call.on('stream', user_video_stream  => {
    add_video_stream(video, user_video_stream)
  })
  call.on('close', () => {
    video.remove()
  })

  peers[userId] = call
}
