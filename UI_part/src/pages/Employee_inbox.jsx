import React, { useState } from 'react';

const Inbox = () => {
  const messages = [
    { id: 1, sender: 'John Doe', subject: 'Meeting Reminder', content: 'Don’t forget our meeting tomorrow at 10 AM.' },
    { id: 2, sender: 'Jane Smith', subject: 'Project Update', content: 'The project is on track and will be completed by next week.' },
    { id: 3, sender: 'Mark Lee', subject: 'Lunch Invitation', content: 'Would you like to grab lunch tomorrow?' },
  ];

  const [pendingMessages, setPendingMessages] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState('');
  const [messageContent, setMessageContent] = useState('');

  const handleSendMessage = () => {
    if (selectedEmail && messageContent) {
      const newPendingMessage = {
        id: pendingMessages.length + 1,
        recipient: selectedEmail,
        content: messageContent,
      };
      setPendingMessages([...pendingMessages, newPendingMessage]);
      setSelectedEmail('');
      setMessageContent('');
    }
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

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Incoming Messages</h2>
        {messages.map((message) => (
          <div key={message.id} style={{ borderBottom: '1px solid #FFE0B2', paddingBottom: '10px', marginBottom: '15px' }}>
            <h3 style={{ color: '#FF5722', marginBottom: '5px' }}>{message.subject}</h3>
            <p style={{ margin: 0, color: '#333' }}><strong>From:</strong> {message.sender}</p>
            <p style={{ margin: '5px 0', color: '#555' }}>{message.content}</p>
          </div>
        ))}
      </div>

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
        >
          Send Message
        </button>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Pending Messages</h2>
        {pendingMessages.length > 0 ? (
          pendingMessages.map((pending) => (
            <div key={pending.id} style={{ borderBottom: '1px solid #FFE0B2', paddingBottom: '10px', marginBottom: '15px' }}>
              <p style={{ margin: 0, color: '#333' }}><strong>To:</strong> {pending.recipient}</p>
              <p style={{ margin: '5px 0', color: '#555' }}>{pending.content}</p>
            </div>
          ))
        ) : (
          <p style={{ color: '#888', textAlign: 'center' }}>No pending messages.</p>
        )}
      </div>
    </div>
  );
};

export default Inbox;
