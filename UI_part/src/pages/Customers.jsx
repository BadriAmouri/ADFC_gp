import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  TextField,
  Typography,
  Slider,
  Switch,
} from "@mui/material";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectType: "",
    shift: "4x4",
    duration: "",
    startDate: "",
    endDate: "",
    depth: "",
    geologicalComplexity: "",
    volumeEstimate: "",
    riskLevel: 0.5,
    hasAutomation: false,
    projectBudget: "",
    waterTreatment: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSliderChange = (_, newValue) => {
    setFormData((prev) => ({
      ...prev,
      riskLevel: newValue,
    }));
  };

  return (
    <Box   className="font-futura" 
    sx={{ maxWidth: 'full', mx: "auto", p: 3, mt: 10, bgcolor: "#000000", borderRadius: 2 }}>
      <Typography variant="h4" sx={{ fontFamily: 'Futura' }}  fontWeight="bold" mb={2} color="white">Create Project</Typography>

      {/* Project Type */}
      <FormControl fullWidth margin="normal">
        <InputLabel style={{ color: 'white' }}>Project Type</InputLabel>
        <Select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          sx={{ color: 'white', '.MuiSvgIcon-root': { color: 'white' } }}
        >
          <MenuItem value="Exploration">Exploration</MenuItem>
          <MenuItem value="Exploitation">Exploitation</MenuItem>
          <MenuItem value="Development">Development</MenuItem>
          <MenuItem value="Workover">Workover</MenuItem>
          <MenuItem value="Appraisal">Appraisal</MenuItem>
        </Select>
      </FormControl>

      {/* Shifts */}
      <FormControl fullWidth margin="normal">
        <InputLabel style={{ color: 'white' }}>Shift</InputLabel>
        <Select
          name="shift"
          value={formData.shift}
          onChange={handleChange}
          sx={{ color: 'white', '.MuiSvgIcon-root': { color: 'white' } }}
        >
          <MenuItem value="4x4">4x4</MenuItem>
          <MenuItem value="3x6">3x6</MenuItem>
        </Select>
      </FormControl>

      {/* Duration */}
      <TextField
        fullWidth
        label="Duration (days)"
        name="duration"
        type="number"
        value={formData.duration}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{ style: { color: 'white' } }}
        InputProps={{ style: { color: 'white' } }}
      />

      {/* Start and End Date */}
      <Box display="flex" gap={2}>
        <TextField
          fullWidth
          label="Start Date (YYYY-MM)"
          name="startDate"
          type="month"
          value={formData.startDate}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{ style: { color: 'white' } }}
        />
        <TextField
          fullWidth
          label="End Date (YYYY-MM)"
          name="endDate"
          type="month"
          value={formData.endDate}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{ style: { color: 'white' } }}
        />
      </Box>

      {/* Depth */}
      <TextField
        fullWidth
        label="Depth (m)"
        name="depth"
        type="number"
        value={formData.depth}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{ style: { color: 'white' } }}
        InputProps={{ style: { color: 'white' } }}
      />

      {/* Geological Complexity */}
      <FormControl fullWidth margin="normal">
        <InputLabel style={{ color: 'white' }}>Geological Complexity</InputLabel>
        <Select
          name="geologicalComplexity"
          value={formData.geologicalComplexity}
          onChange={handleChange}
          sx={{ color: 'white', '.MuiSvgIcon-root': { color: 'white' } }}
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>

      {/* Volume Estimate */}
      <TextField
        fullWidth
        label="Volume Estimate"
        name="volumeEstimate"
        type="number"
        value={formData.volumeEstimate}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{ style: { color: 'white' } }}
        InputProps={{ style: { color: 'white' } }}
      />

      {/* Risk Level */}
      <Box mt={3}>
        <Typography sx={{ fontFamily: 'Futura' }} color="white" gutterBottom>Risk Level: {formData.riskLevel}</Typography>
        <Slider
          value={formData.riskLevel}
          min={0}
          max={1}
          step={0.01}
          onChange={handleSliderChange}
          sx={{ color: '#fbc02d' }}
        />
      </Box>

      {/* Automation */}
      <Box mt={2} display="flex" alignItems="center" gap={2}>
        <Typography sx={{ fontFamily: 'Futura' }} color="white">Has Automation</Typography>
        <Switch
          name="hasAutomation"
          checked={formData.hasAutomation}
          onChange={handleChange}
          color="warning"
        />
      </Box>

      {/* Budget */}
      <TextField
        fullWidth
        label="Project Budget ($)"
        name="projectBudget"
        type="number"
        value={formData.projectBudget}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{ style: { color: 'white' } }}
        InputProps={{ style: { color: 'white' } }}
      />

      {/* Water Treatment */}
      <Box mt={2} display="flex" alignItems="center" gap={2}>
        <Typography color="white" sx={{ fontFamily: 'Futura' }}>Water Treatment</Typography>
        <Switch
          name="waterTreatment"
          checked={formData.waterTreatment}
          onChange={handleChange}
          color="warning"
        />
      </Box>

      <Button fullWidth variant="contained" color="warning" sx={{ fontFamily: 'Futura' ,mt: 4}}  >
        Create Project
      </Button>
    </Box>
  );
};

export default ProjectForm;
