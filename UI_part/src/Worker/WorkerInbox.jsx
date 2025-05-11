import React, { useState } from 'react';
// Search Projects Component ( inbox part ) Worker Part 

const WorkerInbox = () => {
  const messages = [
    { id: 1, sender: 'John Doe', subject: 'Meeting Reminder', content: 'Don’t forget our meeting tomorrow at 10 AM.' },
    { id: 2, sender: 'Jane Smith', subject: 'Project Update', content: 'The project is on track and will be completed by next week.' },
    { id: 3, sender: 'Mark Lee', subject: 'Lunch Invitation', content: 'Would you like to grab lunch tomorrow?' },
  ];

  const [pendingMessages, setPendingMessages] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [openedMessage, setOpenedMessage] = useState(null);

  const handleSendMessage = () => {
    if (selectedEmail && messageContent) {
      const newMessage = {
        id: Date.now(),
        recipient: selectedEmail,
        content: messageContent,
      };
      setPendingMessages([...pendingMessages, newMessage]);
      setSelectedEmail('');
      setMessageContent('');
    }
  };

  const handleRemovePendingMessage = (id) => {
    setPendingMessages(pendingMessages.filter((msg) => msg.id !== id));
  };

  const sectionStyle = {
    maxWidth: '700px',
    margin: '20px auto',
    backgroundColor: '#FFF9F2',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    padding: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #FFCCBC',
    marginBottom: '15px',
    fontSize: '1rem',
  };

  const headingStyle = {
    color: '#FF7F00',
    marginBottom: '20px',
    textAlign: 'center',
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#FFFBF5', minHeight: '100vh', padding: '30px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#FF9800', fontSize: '2.5rem' }}>Employee Inbox</h1>
        <p style={{ color: '#FF5722', fontSize: '1.1rem' }}>View and manage your internal communications</p>
      </div>

      {/* Incoming Messages */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Incoming Messages</h2>
        {messages.map((msg) => (
          <div
            key={msg.id}
            onClick={() => setOpenedMessage(msg)}
            style={{ borderBottom: '1px solid #FFE0B2', paddingBottom: '10px', marginBottom: '15px', cursor: 'pointer' }}
          >
            <h3 style={{ color: '#FF5722', marginBottom: '5px' }}>{msg.subject}</h3>
            <p style={{ margin: 0, color: '#333' }}><strong>From:</strong> {msg.sender}</p>
          </div>
        ))}
      </div>

      {/* Opened Message */}
      {openedMessage && (
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Opened Message</h2>
          <h3 style={{ color: '#FF5722', marginBottom: '5px' }}>{openedMessage.subject}</h3>
          <p style={{ margin: 0, color: '#333' }}><strong>From:</strong> {openedMessage.sender}</p>
          <p style={{ margin: '10px 0', color: '#555' }}>{openedMessage.content}</p>
          <button
            onClick={() => setOpenedMessage(null)}
            style={{
              backgroundColor: '#FF9800',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
            aria-label="Close opened message"
          >
            Close
          </button>
        </div>
      )}

      {/* Send Message */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Send a Message</h2>
        <label style={{ color: '#555', fontWeight: 'bold' }}>Recipient Email:</label>
        <input
          type="email"
          value={selectedEmail}
          onChange={(e) => setSelectedEmail(e.target.value)}
          placeholder="employee@example.com"
          style={inputStyle}
        />
        <label style={{ color: '#555', fontWeight: 'bold' }}>Message Content:</label>
        <textarea
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          placeholder="Write your message here..."
          rows={5}
          style={inputStyle}
        />
        <button
          onClick={handleSendMessage}
          style={{
            backgroundColor: '#FF9800',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            width: '100%',
          }}
          aria-label="Send message"
        >
          Send Message
        </button>
      </div>

      {/* Pending Messages */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Pending Messages</h2>
        {pendingMessages.length > 0 ? (
          pendingMessages.map((msg) => (
            <div key={msg.id} style={{ borderBottom: '1px solid #FFE0B2', paddingBottom: '10px', marginBottom: '15px' }}>
              <p style={{ margin: 0, color: '#333' }}><strong>To:</strong> {msg.recipient}</p>
              <p style={{ margin: '5px 0', color: '#555' }}>{msg.content}</p>
              <button
                onClick={() => handleRemovePendingMessage(msg.id)}
                style={{
                  backgroundColor: '#FF7043',
                  color: '#fff',
                  padding: '6px 12px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                }}
                aria-label={`Delete message to ${msg.recipient}`}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p style={{ color: '#888', textAlign: 'center' }}>No pending messages.</p>
        )}
      </div>
    </div>
  );
};

export default WorkerInbox;
