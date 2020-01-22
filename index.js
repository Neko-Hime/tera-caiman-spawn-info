const EVENT_MESSAGE_TYPE = 42;

module.exports = function CaimanSpawnInfo(mod) {

    mod.hook('S_SPAWN_NPC', 11, event => {
        if ([1023].includes(event.huntingZoneId)) {
            switch (event.templateId) {
                case 8000:
                    sendMessage(EVENT_MESSAGE_TYPE, 'Caiman Spawned');
                    return false;
                case 7000:
                    sendMessage(EVENT_MESSAGE_TYPE, 'Portal Spawned');
                    return false;
            }
        }
    });

    function sendMessage (type, msg) {
        mod.send('S_DUNGEON_EVENT_MESSAGE', 2, {
            type: type,
            chat: false,
            channel: 0,
            message: msg
        });
    }
};