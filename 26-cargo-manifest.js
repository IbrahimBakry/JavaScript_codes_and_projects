// This program normalizes cargo weights to kg and validates manifest objects.

// Functions: normalizeUnits (convert to kg), validateManifest (check fields), and processManifest (log success or errors).

// 1. Normalize weight to kilograms without mutating the original object
function normalizeUnits(manifest) {
  // Copy the manifest so we don't modify the input
  const normalized = { ...manifest };

  // If weight is in pounds, convert to kg (1 lb ≈ 0.45 kg)
  if (manifest.unit === "lb") {
    normalized.weight = manifest.weight * 0.45;
    normalized.unit = "kg";
  }
  // If already "kg", the copy already has the right values

  return normalized;
}

// 2. Validate a manifest and return an object of problems found
function validateManifest(manifest) {
  const errors = {};

  // containerId: must be a positive integer
  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }

  // destination: non-empty string after trimming
  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  // weight: positive number
  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
    errors.weight = "Invalid";
  }

  // unit: must be "kg" or "lb"
  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  // hazmat: must be boolean
  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

// 3. Process a manifest: log success (with kg weight) or errors
function processManifest(manifest) {
  const validation = validateManifest(manifest);

  if (Object.keys(validation).length === 0) {
    // Valid manifest: log container id and total weight in kg
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    // Invalid manifest: log container id and the errors object
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}